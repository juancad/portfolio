import { Tooltip, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { TechnologieIcon } from "./Icons";

export default function Technologies() {
    return (
        <section id="tecnologias">
            <header>
                <h2 className="font-extrabold text-xl sm:text-3xl text-left"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Tecnologías</span></h2>
            </header>
            <br /><br />
            <ShowTechnologiesList list={frameworks}>Frameworks</ShowTechnologiesList>
            <ShowTechnologiesList list={lenguajes}>Lenguajes</ShowTechnologiesList>
            <ShowTechnologiesList list={bases_datos}>Bases de datos</ShowTechnologiesList>
        </section>
    );
}

function ShowTechnologiesList({ children, list }) {
    return (
        <Card className="inline-block mr-3 mb-2">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h3 className="font-bold text-pink-600 m-0">{children}</h3>
            </CardHeader>
            <CardBody className="inline">
                {list.map((framework, index) => (
                    <Tooltip
                        key={index}
                        showArrow={true}
                        content={framework}
                        classNames={{
                            base: "py-2 px-4 shadow-xl text-white dark:text-black bg-black dark:bg-white",
                            arrow: "bg-black dark:bg-white",
                        }}
                    >
                        <Button className="rounded-none mt-2 mb-4 ml-1 mr-1" variant="light" isIconOnly>
                            <TechnologieIcon size={50}>{framework}</TechnologieIcon>
                        </Button>
                    </Tooltip>
                ))}
            </CardBody>
        </Card>
    )
}

const frameworks = [
    'Angular', 'React'
];

const lenguajes = [
    'Java', 'JavaScript', 'TypeScript', 'PHP', 'C'
];

const bases_datos = [
    'MySQL', 'Cassandra', 'MongoDB'
];