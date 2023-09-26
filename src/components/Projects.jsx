import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
import { TechnologieIcon, GitHubIcon } from "./Icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

export default function Projects() {
  return (
    <section id="proyectos">
      <header>
        <h2 className="font-extrabold text-xl sm:text-3xl text-left"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Proyectos</span></h2>
      </header>
      <br /><br />
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card className="col-span-12 sm:col-span-4">
              <CardHeader className="flex p-0">
                <Image
                  alt="meta-aplicación para el incrustado de modelos de IA"
                  width="100%"
                  className="rounded-t-lg"
                  src={project.image}
                  radius="none"
                />
              </CardHeader>
              <CardBody>
                <h3 className="mb-2.5 font-bold text-pink-600">{project.title}</h3>

                <p>
                  {project.desc}
                </p>
                <br />
                <div className="inline-block">
                  {project.tecnologies.map((technologie, index2) => (
                    <Technologie key={index2}>{technologie}</Technologie>
                  ))}
                </div>

              </CardBody>
              <Divider />
              <CardFooter className="gap-4">
                <Link
                  isExternal
                  href={project.github}
                >
                  Código fuente&nbsp;
                  <GitHubIcon className="flex mx-1 text-current self-center" size={14} />
                </Link>
                <Link
                  isExternal
                  href={project.demo}
                  showAnchorIcon
                >
                  Demo
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="max-w-[900px] inline-flex gap-5">

      </div>
    </section>
  );
}

export function Technologie({ children }) {
  return (
    <Chip
      className="pr-2 mb-2 mr-1"
      endContent={<TechnologieIcon size={18}>{children}</TechnologieIcon>}
      variant="flat"
    >
      {children}
    </Chip>
  );
}

const projects = [
  {
    title: 'Meta-aplicación para el incrustado de modelos de IA',
    desc: 'Aplicación web para subir modelos de TensorFlow previamente entrenados y optimizados y poder crear una aplicación web que utilice dicho modelo para predecir las imágenes de la cámara web del dispositivo.',
    image: 'meta-app.png',
    demo: 'https://juancad.github.io/meta-app-models-embed/',
    github: 'https://github.com/juancad/meta-app-models-embed',
    tecnologies: ['Angular', 'TypeScript', 'TF.js'],
  }
];