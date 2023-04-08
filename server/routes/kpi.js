import express from "express";

const router = express.Router();

router.get("/kpi", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
