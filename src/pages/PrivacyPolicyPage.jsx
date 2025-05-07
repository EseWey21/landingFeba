"use client"

import { useEffect, useRef } from "react"
import "../styles/PrivacyPolicyPage.css"

export default function PrivacyPolicyPage() {
  const scrollElementsRef = useRef([])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Handle scroll reveal animations
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElementsRef.current = Array.from(scrollElements)

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    }

    const displayScrollElement = (element) => {
      element.classList.add("active")
    }

    const hideScrollElement = (element) => {
      element.classList.remove("active")
    }

    const handleScrollAnimation = () => {
      scrollElementsRef.current.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el)
        } else {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener("scroll", handleScrollAnimation)

    // Initialize on page load
    setTimeout(handleScrollAnimation, 100)

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation)
    }
  }, [])

  return (
    <div className="privacy-page-container">
      <div className="privacy-content">
        <h2>Política de Privacidad de Febacode</h2>
        <p className="scroll-reveal">Última actualización: abril 2025</p>

        <h3 className="scroll-reveal">1. Introducción</h3>
        <p className="scroll-reveal">
          Bienvenido a Febacode ("nosotros", "nuestro" o "la Empresa"). En Febacode, valoramos tu privacidad y nos
          comprometemos a proteger la información personal que compartes con nosotros. Esta Política de Privacidad
          detalla exhaustivamente cómo recopilamos, utilizamos, almacenamos, compartimos y protegemos tus datos
          personales cuando accedes y utilizas nuestro sitio web <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">https://febacode.com</a>,
          así como cualquier otro medio digital o interacción que tengas con nuestros servicios, incluyendo correos
          electrónicos, formularios de contacto y comunicaciones a través de redes sociales. Al navegar por nuestro
          sitio y utilizar nuestros servicios, confirmas que has leído, comprendido y estás de acuerdo con las prácticas
          descritas en esta política en su totalidad. Te recomendamos leer detenidamente este documento para estar
          informado sobre tus derechos y nuestras responsabilidades con respecto a tu información personal.
        </p>
        <p className="scroll-reveal">
          Al utilizar nuestros servicios de manera continua, se considera que aceptas plenamente y sin reservas las
          prácticas y los términos estipulados en esta política de privacidad. Si no estás de acuerdo con alguna parte
          de esta política, te solicitamos que no accedas ni utilices nuestros servicios. Nos reservamos el derecho de
          modificar esta política en cualquier momento, y te notificaremos sobre cualquier cambio significativo según lo
          requiera la ley. Tu uso continuado de los servicios después de dichas modificaciones constituirá tu aceptación
          de la política revisada.
        </p>

        <h3 className="scroll-reveal">2. Definiciones</h3>
        <ul className="scroll-reveal">
          <li>
            <strong>Servicio:</strong> Se refiere colectivamente al sitio web de Febacode, ubicado en{" "}
            <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">
              https://febacode.com
            </a>, todas las páginas, subdominios, contenido, funcionalidades y servicios que ofrecemos a través de él,
            así como cualquier otra plataforma digital, aplicación o medio de interacción proporcionado por Febacode.
            Esto incluye, sin limitación, la información, el software, los productos, los servicios y los gráficos
            disponibles en el sitio web.
          </li>
          <li>
            <strong>Datos Personales:</strong> Es cualquier información concerniente a una persona física identificada o
            identificable. Esto incluye, pero no se limita a tu nombre completo, dirección de correo electrónico, número
            de teléfono, dirección postal, información de facturación (como detalles de tarjetas de crédito), datos de
            ubicación (si los habilitas), dirección IP, identificadores únicos de dispositivos, preferencias de usuario
            y cualquier otra información que pueda utilizarse para identificarte directa o indirectamente.
          </li>
          <li>
            <strong>Datos de Uso:</strong> Son informaciones recopiladas automáticamente que se generan por el uso del
            Servicio o desde la infraestructura del Servicio mismo (por ejemplo, la duración de una visita a la página).
            Esto puede incluir tu dirección IP, tipo de navegador, versión del navegador, las páginas de nuestro Servicio
            que visitas, la hora y fecha de tu visita, el tiempo de permanencia en esas páginas, identificadores únicos
            de dispositivo y otros datos de diagnóstico.
          </li>
          <li>
            <strong>Cookies:</strong> Son pequeños archivos de texto que un sitio web almacena en tu dispositivo (ordenador,
            tableta, teléfono móvil) cuando lo visitas. Las cookies permiten al sitio web recordar tus acciones y
            preferencias (como inicio de sesión, idioma, tamaño de letra y otras preferencias de visualización) durante
            un período de tiempo, para que no tengas que volver a introducirlas cada vez que vuelves al sitio o navegas
            de una página a otra. También utilizamos cookies para analizar el tráfico web y mejorar la funcionalidad y
            el rendimiento de nuestro sitio.
          </li>
          <li>
            <strong>Responsable del Tratamiento:</strong> Es la persona física o jurídica, autoridad pública, servicio u
            otro organismo que, solo o conjuntamente con otros, determina los fines y medios del tratamiento de datos
            personales. En el contexto de esta política, el Responsable del Tratamiento es Febacode S.A. de C.V., con
            domicilio en [Dirección Completa de Febacode], Ciudad de México, México.
          </li>
          <li>
            <strong>Encargado del Tratamiento:</strong> Es la persona física o jurídica, autoridad pública, servicio u
            otro organismo que trata datos personales por cuenta del Responsable del Tratamiento. Esto puede incluir a
            proveedores de servicios de alojamiento web, empresas de análisis de datos, procesadores de pagos y otros
            terceros que nos asisten en la operación de nuestro negocio y la prestación de nuestros servicios.
          </li>
          <li>
            <strong>Información del Dispositivo:</strong> Recopilamos información específica sobre el dispositivo que
            utilizas para acceder a nuestro Servicio. Esto puede incluir el modelo del hardware, la versión del sistema
            operativo, los identificadores únicos del dispositivo (como el IMEI o la dirección MAC), la información de la
            red móvil, el número de teléfono del dispositivo y otros atributos del dispositivo. Esta información nos
            ayuda a optimizar nuestro Servicio para tu dispositivo y a comprender mejor cómo se utiliza nuestra plataforma.
          </li>
          <li>
            <strong>Datos de Ubicación (si aplica):</strong> Si habilitas los servicios de ubicación en tu dispositivo y
            nos das tu consentimiento explícito, podemos recopilar información sobre tu ubicación geográfica precisa o
            aproximada. Utilizamos esta información para proporcionar servicios basados en la ubicación, como personalizar
            el contenido o mejorar la funcionalidad del Servicio en tu área. Puedes desactivar la recopilación de datos
            de ubicación en cualquier momento a través de la configuración de tu dispositivo.
          </li>
        </ul>

        <h3 className="scroll-reveal">3. Recopilación y Uso de Datos</h3>
        <h4 className="scroll-reveal">Tipos de Datos Personales Recopilados:</h4>
        <ul className="scroll-reveal">
          <li>
            <strong>Datos Personales:</strong> Cuando interactúas con nuestro Servicio, podemos recopilar diversos tipos
            de datos personales. Esto incluye tu nombre completo, dirección de correo electrónico, número de teléfono,
            información de facturación (necesaria para procesar pagos si utilizas servicios de pago), dirección postal
            (si es relevante para los servicios solicitados), información de contacto y cualquier otra información que
            decidas proporcionarnos directamente a través de formularios en nuestro sitio web, correos electrónicos o
            cualquier otro medio de comunicación.
          </li>
          <li>
            <strong>Datos de Uso:</strong> Recopilamos automáticamente datos sobre cómo accedes y utilizas nuestro
            Servicio. Esto incluye tu dirección IP (que puede revelar tu ubicación general), tipo de navegador, versión
            del navegador, las páginas de nuestro Servicio que visitas, la hora y fecha de tu visita, el tiempo de
            permanencia en esas páginas, los enlaces en los que haces clic, la secuencia de las páginas que visitas y
            otros datos de diagnóstico que nos ayudan a entender el comportamiento del usuario y a mejorar la
            experiencia general.
          </li>
          <li>
            <strong>Cookies:</strong> Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad
            en nuestro Servicio y mantener cierta información. Las cookies son esenciales para la funcionalidad del
            sitio, para recordar tus preferencias (como el idioma), para recopilar información sobre el uso del sitio
            con fines analíticos y para habilitar ciertas funcionalidades interactivas. Puedes controlar el uso de cookies
            a través de la configuración de tu navegador, pero deshabilitar ciertas cookies puede afectar la funcionalidad
            de nuestro Servicio.
          </li>
          <li>
            <strong>Información del Dispositivo:</strong> Recopilamos información sobre el dispositivo que utilizas para
            acceder a nuestro Servicio, como el modelo del hardware, la versión del sistema operativo, los identificadores
            únicos del dispositivo, la información de la red móvil (incluido el número de teléfono), la dirección IP y
            otros atributos técnicos. Esta información nos ayuda a optimizar nuestro Servicio para diferentes dispositivos
            y a garantizar una experiencia de usuario consistente.
          </li>
          <li>
            <strong>Datos de Ubicación (si aplica):</strong> Si nos has dado tu consentimiento explícito, podemos recopilar
            datos precisos o aproximados sobre tu ubicación geográfica a través de tecnologías como GPS, Wi-Fi o torres
            de telefonía móvil. Utilizamos esta información para ofrecerte servicios basados en la ubicación, como
            mostrar contenido relevante para tu área o mejorar la funcionalidad de ciertas características del Servicio.
            Puedes retirar tu consentimiento para la recopilación de datos de ubicación en cualquier momento a través de
            la configuración de tu dispositivo.
          </li>
        </ul>

        <div className="privacy-separator"></div>

        <h3 className="scroll-reveal">4. Uso de los Datos Personales</h3>
        <p className="scroll-reveal">Utilizamos los datos personales recopilados para diversos fines, incluyendo:</p>
        <ul className="scroll-reveal">
          <li>
            <strong>Proporcionar y mantener el servicio:</strong> Utilizamos tus datos para operar, mantener y mejorar
            nuestro Servicio, para garantizar su correcto funcionamiento y para proporcionarte las funcionalidades y
            características que esperas.
          </li>
          <li>
            <strong>Personalizar tu experiencia y ofrecer contenido relevante:</strong> Podemos utilizar tus datos para
            comprender tus preferencias y ofrecerte contenido, recomendaciones y publicidad que sean más relevantes para
            tus intereses y necesidades.
          </li>
          <li>
            <strong>Notificar sobre cambios:</strong> Utilizamos tu información de contacto para enviarte notificaciones
            importantes sobre cambios en nuestro Servicio, actualizaciones de esta Política de Privacidad, términos de
            servicio u otras comunicaciones administrativas o legales.
          </li>
          <li>
            <strong>Permitir funciones interactivas:</strong> Nuestro Servicio puede ofrecer funciones interactivas que
            te permitan participar, comentar o interactuar con otros usuarios o con nuestro contenido. Los datos que
            proporcionas a través de estas funciones se utilizan para habilitar y moderar dichas interacciones.
          </li>
          <li>
            <strong>Atención al cliente:</strong> Utilizamos tus datos para responder a tus consultas, solicitudes de
            soporte técnico, preguntas o comentarios, y para proporcionarte asistencia y solucionar problemas relacionados
            con el Servicio.
          </li>
          <li>
            <strong>Análisis para mejora:</strong> Analizamos los datos de uso y otra información recopilada para entender
            cómo los usuarios interactúan con nuestro Servicio, identificar tendencias, medir la efectividad de nuestras
            campañas de marketing y mejorar la calidad, la funcionalidad y el diseño de nuestro sitio web y servicios.
          </li>
          <li>
            <strong>Monitoreo del servicio:</strong> Podemos monitorear el uso de nuestro Servicio para detectar, prevenir
            y abordar problemas técnicos, fraudes, abusos, infracciones de seguridad y otras actividades potencialmente
            dañinas o ilegales.
          </li>
          <li>
            <strong>Detectar problemas técnicos:</strong> Recopilamos y analizamos datos para identificar y solucionar
            errores, fallos y otros problemas técnicos que puedan afectar el funcionamiento de nuestro Servicio o la
            experiencia del usuario.
          </li>
          <li>
            <strong>Enviar comunicaciones promocionales (con tu consentimiento):</strong> Con tu consentimiento previo,
            podemos utilizar tu información de contacto para enviarte correos electrónicos, boletines informativos u
            otras comunicaciones de marketing sobre nuestros productos, servicios, ofertas especiales o eventos que
            creemos que pueden ser de tu interés. Puedes optar por no recibir estas comunicaciones en cualquier momento.
          </li>
          <li>
            <strong>Cumplir obligaciones legales:</strong> Podemos utilizar y divulgar tus datos personales en la medida
            en que sea necesario para cumplir con nuestras obligaciones legales, responder a requerimientos legales
            (como órdenes judiciales o solicitudes de autoridades gubernamentales), hacer cumplir nuestros acuerdos y
            proteger nuestros derechos legales.
          </li>
        </ul>

        <h3 className="scroll-reveal">5. Transferencia de Datos Personales</h3>
        <p className="scroll-reveal">
          La información que recopilamos sobre ti, incluyendo tus datos personales, puede ser transferida y almacenada
          en servidores y equipos ubicados en otros países o jurisdicciones fuera de tu país de residencia, donde las
          leyes de protección de datos pueden ser diferentes a las de tu jurisdicción. Al utilizar nuestro Servicio y
          proporcionarnos tu información, consientes expresamente esta transferencia, almacenamiento y procesamiento
          de tus datos en estas ubicaciones.
        </p>
        <p className="scroll-reveal">
          En caso de que realicemos transferencias de tus datos personales fuera de tu país, nos aseguraremos de que
          dichas transferencias cuenten con las garantías adecuadas y se realicen de conformidad con las leyes de
          protección de datos aplicables. Estas garantías pueden incluir la implementación de cláusulas contractuales
          estándar aprobadas por las autoridades competentes, la verificación de que el destinatario se encuentre en un
          país con un nivel adecuado de protección de datos, o la aplicación de otras medidas de seguridad apropiadas
          para proteger tu información personal. Te proporcionaremos más detalles sobre las garantías específicas
          utilizadas para la transferencia de tus datos personales a solicitud.
        </p>

        <h3 className="scroll-reveal">6. Divulgación de Datos Personales</h3>
        <p className="scroll-reveal">Podemos divulgar tus Datos Personales en las siguientes circunstancias:</p>
        <ul className="scroll-reveal">
          <li>
            <strong>Cumplir con obligaciones legales:</strong> Podemos divulgar tus datos personales si así lo exige la
            ley o en respuesta a solicitudes válidas de autoridades públicas (por ejemplo, un tribunal o una agencia
            gubernamental).
          </li>
          <li>
            <strong>Proteger derechos de Febacode:</strong> Podemos divulgar tu información cuando creamos de buena fe
            que la divulgación es necesaria para proteger nuestros derechos, propiedad o seguridad, así como los de
            nuestros usuarios o terceros.
          </li>
          <li>
            <strong>Investigar irregularidades:</strong> Podemos divulgar datos personales en relación con investigaciones
            de posibles violaciones de nuestros términos de servicio, sospechas de fraude u otras actividades ilegales.
          </li>
          <li>
            <strong>Proteger usuarios o el público:</strong> Podemos divulgar información personal si creemos de buena fe
            que es necesario para proteger la seguridad personal de los usuarios de nuestro Servicio o del público en
            general.
          </li>
          <li>
            <strong>Evitar responsabilidad legal:</strong> Podemos divulgar tus datos personales en la medida en que sea
            necesario para protegernos contra reclamaciones legales o responsabilidades.
          </li>
          <li>
            <strong>Con proveedores de servicios que nos asisten en nuestras operaciones:</strong> Podemos compartir tus
            datos personales con terceros proveedores de servicios que nos ayudan en la prestación de nuestro Servicio,
            como proveedores de alojamiento web, servicios de análisis de datos, procesamiento de pagos, marketing por
            correo electrónico y atención al cliente. Estos proveedores están contractualmente obligados a proteger tu
            información y a utilizarla únicamente para los fines especificados en nuestros acuerdos con ellos.
          </li>
        </ul>

        <div className="privacy-separator"></div>
        
        <h3 className="scroll-reveal">8. Contacto</h3>
        <p className="scroll-reveal">
          Si tienes preguntas, inquietudes o deseas ejercer alguno de tus derechos, puedes comunicarte con nosotros a
          través de los siguientes medios:
        </p>
        <ul className="scroll-reveal">
          <li>
            <strong>Email:</strong> <a href="mailto:contacto@febacode.com">contacto@febacode.com</a>
          </li>
          <li>
            <strong>Sitio web:</strong> <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">https://febacode.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}