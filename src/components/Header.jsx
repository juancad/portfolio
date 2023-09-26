import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { GitHubIcon, UserIcon, LinkedInIcon } from "./Icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Inicio',
      link: '#',
    }, {
      title: 'Proyectos',
      link: '#proyectos',
    }, {
      title: 'Tecnologías',
      link: '#tecnologias',
    }, {
      title: 'Contacto',
      link: '#contacto',
    }
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="#"><UserIcon /> &nbsp; <span className="hidden sm:block">Portafolio de Juan C.</span></Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href={item.link}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className='group relative max-w-fit inline-flex items-center justify-start touch-none tap-highlight-transparent p-1 w-8 h-8 transition-opacity opacity-90 hover:opacity-70 cursor-pointer ' href="https://www.linkedin.com/in/juancarlosad/" color="foreground" target="_blank"><LinkedInIcon /></Link>
          <Link className='group relative max-w-fit inline-flex items-center justify-start touch-none tap-highlight-transparent p-1 w-8 h-8 transition-opacity  opacity-90 hover:opacity-70 cursor-pointer ' href="https://github.com/juancad" color="foreground" target="_blank"><GitHubIcon /></Link>
        </NavbarItem>
        <NavbarItem>
          <Button radius="full" size="sm" className="bg-gradient-to-tr from-orange-600 to-pink-600 text-white shadow-lg">
            Descargar CV
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu motionProps>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              color="foreground"
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
