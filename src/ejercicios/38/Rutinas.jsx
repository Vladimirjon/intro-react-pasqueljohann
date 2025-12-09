import workouts from "./data/workouts.json";

const Rutinas = () => {
    return (
    <div>
        <h2>038 – Rutinas Deportivas (base)</h2>

        <pre>{JSON.stringify(workouts, null, 2)}</pre>
    </div>
    );
};

export default Rutinas;
