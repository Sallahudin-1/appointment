import express  from "express";
import { schedule } from "../appointmentmodel";


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.starttime ||
            !req.body.endtime || 
            !req.body.isbooked
        ) {
            return res.status(400).send({
                message: "Send all required fields: starttime, endtime, isBooked"
            });
        }
        
        const newSchedule = {
            starttime: req.body.starttime,
            endtime: req.body.endtime,
            isbooked: req.body.isbooked
        };

        const appoint = await schedule.create(newSchedule);

        return res.status(201).send(appoint);

    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message});
    }
})


router.get('/', async (req, res) => {
    try {
        const newAppoint = await schedule.find({});

        return res.status(200).json({} )
        
    } catch (error) {
        console.error(error);
    }
})

export default router;