import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
  {
    text: 'Primeros pasos',
    children: [
      {
        text: 'Primeros pasos',
        children: [
          '/primeros-pasos/intro',
          '/primeros-pasos/donde-me-anoto',
          '/primeros-pasos/normas-tp',
          '/primeros-pasos/entorno-linux',
          '/primeros-pasos/lenguaje-c',
          '/primeros-pasos/entorno-desarrollo',
          '/primeros-pasos/tp0',
        ],
      },
    ],
  },
  {
    text: 'Guías',
    children: [
      {
        text: 'Consola de Linux y Git',
        children: [
          {
            text: 'Guía de uso de Bash',
            link: '/guias/consola/bash'
          },
          {
            text: 'Git para el Trabajo Práctico',
            link: '/guias/consola/git'
          },
          {
            text: 'Rutas Relativas y Absolutas',
            link: '/guias/consola/rutas'
          },
        ]
      },
      {
        text: 'Programación en C',
        children: [
          {
            text: 'Manejo de Punteros y Memoria Dinámica',
            link: '/guias/programacion/punteros'
          },
          {
            text: 'Argumentos para el main',
            link: '/guias/programacion/main'
          },
          {
            text: 'Cómo hacer una consola interactiva',
            link: '/guias/programacion/readline'
          },
          {
            text: 'Buenas Prácticas de C',
            link: '/guias/programacion/buenas-practicas'
          },
          {
            text: 'Video de Shared Libraries',
            link: '/guias/programacion/shared-libraries'
          },
        ],
      },
      {
        text: 'Uso de syscalls de Linux',
        children: [
          {
            text: 'Guía de Sockets',
            link: '/guias/linux/sockets',
          },
          {
            text: 'Guía de Serialización',
            link: '/guias/linux/serializacion',
          },
          {
            text: 'Charla de Threads y Sincronización',
            link: '/guias/linux/threads',
          },
          {
            text: 'Presentación de Señales',
            link: 'https://faq.utnso.com.ar/seniales'
          },
        ],
      },
      {
        text: 'Herramientas útiles',
        children: [
          {
            text: 'Debugging en Eclipse',
            link: '/guias/herramientas/debugger'
          },
          {
            text: 'Tutorial de Valgrind y Helgrind',
            link: '/guias/herramientas/valgrind'
          },
          {
            text: 'Unit Testing con CSpec',
            link: '/guias/herramientas/cspec'
          },
          {
            text: 'Guía de despliegue de TP',
            link: '/guias/herramientas/deploy'
          },
        ]
      },
    ]
  },
  {
    text: 'Recursos',
    children: [
      {
        text: 'Recursos',
        children: [
          {
            text: 'Máquinas virtuales',
            link: '/recursos/vms',
          },
          {
            text: 'Enunciado del TP',
            link: 'https://faq.utnso.com.ar/enunciado'
          },
          {
            text: 'Commons Library',
            link: 'https://faq.utnso.com.ar/commons'
          },
          {
            text: 'Linux man pages',
            link: 'https://man7.org/linux/man-pages/'
          },
          {
            text: 'TPs Anteriores',
            link: '/recursos/tps-anteriores',
          },
        ],
      },
      {
        text: 'Tutoriales',
        children: [
          {
            text: 'Micro-repaso de Arquitectura',
            link: 'https://faq.utnso.com.ar/guia-repaso-arquitectura'
          },
          {
            text: 'Mario Bash',
            link: 'https://faq.utnso.com.ar/mariobash'
          },
          {
            text: 'Tutorial interactivo de C',
            link: 'https://www.learn-c.org/'
          },
          {
            text: 'Learn Git Branching',
            link: 'https://learngitbranching.js.org/'
          },
        ]
      },
    ],
  },

  {
    text: 'Contacto',
    children: [
      {
        text: 'Consultas',
        children: [
          '/consultas',
        ],
      },
      {
        text: 'Links útiles',
        children: [
          {
            text: 'Blog de la cátedra',
            link: 'https://faq.utnso.com.ar/blog'
          },
          {
            text: 'Foro de consultas',
            link: 'https://faq.utnso.com.ar/foro'
          },
          {
            text: 'Sistema de Inscripciones',
            link: 'https://faq.utnso.com.ar/inscripciones'
          },
          {
            text: 'Campus Virtual',
            link: 'https://faq.utnso.com.ar/cv'
          },
          {
            text: 'Canal de YouTube',
            link: 'https://faq.utnso.com.ar/youtube'
          },
        ]
      },
    ]
  },
]
