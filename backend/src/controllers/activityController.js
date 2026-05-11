import Activity from "../models/Activity.js";

export const createActivity = async (req, res) => {

  try {

    const activity =
      await Activity.create({

        ...req.body,

        user: req.user.id,
      });

    res.status(201).json(activity);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getActivities = async (req, res) => {

  try {

    const activities =
      await Activity.find({
        user: req.user.id,
      });

    res.json(activities);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteActivity = async (req, res) => {

  try {

    await Activity.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });
  }
};