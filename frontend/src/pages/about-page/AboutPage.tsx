import { Loader } from "../../components/UI/loader/Loader.tsx";
import { techs } from "./techs.constant.ts";

export const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-around text-[var(--c-text)]">
            <h2 className="text-3xl mt-10 mb-10">Pet-project: CRM system for IT school</h2>

            <p className="text-2xl mb-20">
                The App was created to practice frontend and backend technologies
            </p>

            <ul className="flex gap-20 text-2xl font-bold text-[var(--c-table-head)]">
                {techs.map((tech) => (
                    <li className="flex flex-col gap-5 items-center justify-center">
                        <p>{tech.name}</p>
                        <div className="w-[180px] h-[180px]">
                            <img src={tech.image} alt={tech.name} width={180} />
                        </div>
                    </li>
                ))}
            </ul>
            <Loader margin_t={7} />
        </div>
    );
};
