const Firstset = require("../Models/firstset");
const Secondset = require("../Models/secondset");
exports.dataRecords = async (req, res) => {
try {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  
  const pipeline = [
    {
      $lookup: {
        from: 'secondsets', // Replace 'secondsets' with the actual name of the second collection
        localField: 'email',
        foreignField: 'email',
        as: 'team_data'
      }
    },
    {
      $project: {
        _id: 0,
        full_name: 1,
        email: 1,
        number: 1,
        city: 1,
        url: 1,
        team_name: { $arrayElemAt: ['$team_data.team_name', 0] }
      }
    }
  ];
  const startIndex = (page - 1) * size;
  const endIndex = page * size;
  const joinedData = await Firstset.aggregate(pipeline)
  let data = joinedData.slice(startIndex,endIndex)
  const totalPages = Math.ceil(joinedData.length/size);

  res.json({
    data,
    totalPages
  })
 
 } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


