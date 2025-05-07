"use client";

import { useEffect } from "react";
import "../styles/TermsAndConditionsPage.css";

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-container">
      <div className="terms-content">
        <h2>Términos y Condiciones de Uso</h2>
        <p className="scroll-reveal">Última actualización: abril 2025</p>

        <h3 className="scroll-reveal">1. Derechos de Propiedad Intelectual</h3>
        <p className="scroll-reveal">
          Todo el contenido presente en el sitio web de Febacode constituye propiedad intelectual exclusiva de la
          empresa, incluyendo pero no limitado al código fuente, bases de datos, funcionalidades, software, elementos
          de diseño, contenido audiovisual, textos, imágenes y gráficos. Asimismo, todas las marcas, logotipos y
          signos distintivos utilizados en el sitio son propiedad registrada de Febacode o de sus respectivos
          titulares que han autorizado su uso.
        </p>
        <p className="scroll-reveal">
          Este contenido está protegido por las leyes aplicables en materia de propiedad intelectual en México. Está
          estrictamente prohibido copiar, modificar, distribuir, transmitir, exhibir, reproducir, publicar, licenciar,
          crear obras derivadas, vender o explotar de cualquier forma dicho contenido sin autorización previa y por
          escrito de Febacode. El uso permitido del sitio se limita al acceso personal, no comercial y con fines
          informativos.
        </p>

        <h3 className="scroll-reveal">2. Propiedad de los Materiales Desarrollados</h3>
        <p className="scroll-reveal">
          Todos los proyectos desarrollados por Febacode para sus clientes, incluyendo diseños, desarrollos a medida,
          sistemas, interfaces, software u otros entregables creativos, serán propiedad exclusiva del cliente una vez
          completados y entregados. Esto incluye los derechos de autor y cualquier otro derecho de propiedad
          intelectual inherente a dichos trabajos.
        </p>
        <p className="scroll-reveal">
          En caso de que por disposición legal alguno de estos derechos se atribuya inicialmente a Febacode, la empresa
          cede de forma irrevocable y permanente todos los derechos e intereses sobre los proyectos al cliente, sin
          limitación de uso, reproducción o modificación.
        </p>
        <p className="scroll-reveal">
          El cliente es responsable de asegurar que cualquier material que proporcione a Febacode para su uso en los
          proyectos (como logotipos, imágenes o textos) sea de su propiedad o que tenga los derechos necesarios para
          su utilización, garantizando que no se infringe ningún derecho de terceros.
        </p>

        <h3 className="scroll-reveal">3. Uso de Tipografías de Licencia Comercial</h3>
        <p className="scroll-reveal">
          Si en el desarrollo de un proyecto se incorporan fuentes tipográficas que requieren licencia para su uso
          comercial, Febacode informará debidamente al cliente sobre su inclusión y la necesidad de adquirir la
          licencia correspondiente.
        </p>
        <p className="scroll-reveal">
          El cliente será responsable de obtener y conservar dichas licencias. Febacode no asumirá ninguna
          responsabilidad por el uso no autorizado de fuentes cuya licencia no haya sido adquirida por el cliente.
          Se recomienda al cliente seguir las instrucciones provistas por Febacode para evitar problemas legales
          relacionados con la propiedad intelectual de terceros.
        </p>

        <h3 className="scroll-reveal">4. Declaraciones y Garantías del Usuario</h3>
        <p className="scroll-reveal">Al acceder y utilizar el sitio web, el usuario declara lo siguiente:</p>
        <ul className="scroll-reveal">
          <li>Que cuenta con la capacidad legal para celebrar contratos vinculantes y aceptar estos términos.</li>
          <li>Que es mayor de edad según la legislación de su país o estado de residencia.</li>
          <li>Que no utilizará herramientas automatizadas para acceder al sitio (como bots o scrapers), salvo autorización previa.</li>
          <li>Que hará uso del sitio exclusivamente con fines lícitos y en cumplimiento de la legislación aplicable.</li>
          <li>Que su conducta en el sitio será respetuosa y no infringirá derechos de terceros ni normas jurídicas.</li>
        </ul>
        <p className="scroll-reveal">
          Cualquier declaración falsa o el incumplimiento de estas garantías puede dar lugar a la suspensión o
          cancelación del acceso del usuario al sitio web.
        </p>

        <h3 className="scroll-reveal">5. Conductas y Actividades Prohibidas</h3>
        <p className="scroll-reveal">
          Está estrictamente prohibido utilizar el sitio web de Febacode para actividades que no estén autorizadas
          expresamente por la empresa. Esto incluye, pero no se limita a:
        </p>
        <ul className="scroll-reveal">
          <li>Recolectar datos personales de otros usuarios sin consentimiento.</li>
          <li>Utilizar el sitio para enviar publicidad no solicitada (spam).</li>
          <li>Intentar interferir con la seguridad, integridad o funcionamiento del sitio.</li>
          <li>Subir contenido malicioso, virus o código diseñado para dañar el sistema.</li>
          <li>Utilizar el sitio con fines difamatorios, ofensivos o discriminatorios.</li>
        </ul>
        <p className="scroll-reveal">
          Febacode se reserva el derecho de restringir o bloquear el acceso al sitio a cualquier usuario que incurra en
          estas prácticas, sin previo aviso.
        </p>

        <h3 className="scroll-reveal">6. Legislación Aplicable y Jurisdicción</h3>
        <p className="scroll-reveal">
          Estos Términos y Condiciones se interpretarán conforme a las leyes vigentes en los Estados Unidos Mexicanos.
          Cualquier controversia o conflicto derivado del uso del sitio web o de la relación entre el usuario y
          Febacode deberá ser resuelto ante los tribunales competentes en la Ciudad de México, renunciando
          expresamente a cualquier otra jurisdicción que pudiera corresponderles por razón de su domicilio presente o
          futuro.
        </p>

        <h3 className="scroll-reveal">7. Confidencialidad y Protección de Datos</h3>
        <p className="scroll-reveal">
          Febacode se compromete a proteger la información confidencial y los datos personales proporcionados por los
          usuarios conforme a lo establecido en la legislación mexicana aplicable y su Aviso de Privacidad. Toda la
          información recolectada será utilizada únicamente con los fines específicos para los que fue proporcionada
          y no será divulgada a terceros sin el consentimiento expreso del titular, salvo que exista una obligación
          legal para hacerlo.
        </p>
        <p className="scroll-reveal">
          El usuario reconoce que la transmisión de datos por internet no puede garantizarse como completamente
          segura, por lo que, aunque Febacode implementa medidas de seguridad razonables, no puede asegurar la
          inviolabilidad de la información transmitida.
        </p>

        <h3 className="scroll-reveal">8. Enlaces a Sitios de Terceros</h3>
        <p className="scroll-reveal">
          El sitio web de Febacode puede contener enlaces a sitios web operados por terceros. Estos enlaces se
          proporcionan únicamente con fines informativos y de conveniencia. Febacode no controla dichos sitios ni se
          responsabiliza por sus contenidos, políticas de privacidad o prácticas. La inclusión de estos enlaces no
          implica respaldo, asociación o responsabilidad alguna por parte de Febacode respecto a dichos sitios o sus
          titulares.
        </p>
        <p className="scroll-reveal">
          El usuario accede a sitios de terceros bajo su propio riesgo y debe revisar sus respectivas condiciones y
          políticas de privacidad antes de interactuar con ellos.
        </p>

        <h3 className="scroll-reveal">9. Disponibilidad del Sitio y Mantenimiento</h3>
        <p className="scroll-reveal">
          Febacode se esfuerza por mantener su sitio web disponible en todo momento; sin embargo, no garantiza que el
          acceso al mismo sea ininterrumpido o libre de errores. El sitio puede experimentar interrupciones
          temporales por motivos de mantenimiento, actualizaciones técnicas, fallos del servidor u otras
          circunstancias fuera del control de la empresa.
        </p>
        <p className="scroll-reveal">
          Febacode se reserva el derecho de suspender, modificar o desactivar temporal o permanentemente el sitio
          web o cualquier parte del mismo sin previo aviso, sin que ello genere responsabilidad alguna frente a los
          usuarios.
        </p>

        <h3 className="scroll-reveal">10. Limitación de Responsabilidad</h3>
        <p className="scroll-reveal">
          El uso del sitio web es bajo el propio riesgo del usuario. Febacode no será responsable, en ningún caso,
          por daños directos, indirectos, incidentales, consecuentes o especiales que resulten del uso o la
          imposibilidad de uso del sitio, incluyendo pero no limitado a pérdidas de datos, interrupciones, errores o
          virus que puedan afectar el equipo del usuario.
        </p>
        <p className="scroll-reveal">
          Febacode no garantiza que el contenido del sitio esté libre de errores ni que responda a las expectativas
          particulares del usuario.
        </p>

        <h3 className="scroll-reveal">11. Indemnización</h3>
        <p className="scroll-reveal">
          El usuario se compromete a indemnizar y mantener indemne a Febacode, sus directivos, empleados, afiliados
          y proveedores frente a cualquier reclamación, daño, responsabilidad, pérdida o gasto (incluidos honorarios
          legales razonables) derivados del uso indebido del sitio web, el incumplimiento de estos términos o la
          infracción de cualquier derecho de terceros.
        </p>

        <h3 className="scroll-reveal">12. Terminación del Acceso</h3>
        <p className="scroll-reveal">
          Febacode se reserva el derecho de restringir, suspender o dar por terminado el acceso del usuario al sitio
          web, total o parcialmente, en cualquier momento y sin necesidad de aviso previo, si detecta un uso
          indebido, fraudulento, violatorio de estos términos o que represente un riesgo para la seguridad o el
          correcto funcionamiento del sitio.
        </p>
        <p className="scroll-reveal">
          La terminación del acceso no exime al usuario de sus obligaciones previas ni limita el derecho de Febacode
          de ejercer acciones legales por cualquier incumplimiento.
        </p>

        <h3 className="scroll-reveal">13. Modificaciones a los Términos</h3>
        <p className="scroll-reveal">
          Febacode se reserva el derecho de modificar, actualizar o complementar estos Términos y Condiciones en
          cualquier momento, sin necesidad de previo aviso. Las modificaciones entrarán en vigor a partir de su
          publicación en el sitio web. Se recomienda al usuario revisar periódicamente esta sección para mantenerse
          informado sobre posibles cambios.
        </p>
        <p className="scroll-reveal">
          El uso continuado del sitio después de la publicación de modificaciones constituye una aceptación tácita de
          los nuevos términos.
        </p>

        <h3 className="scroll-reveal">14. Registro y Acceso a Cuentas</h3>
        <p className="scroll-reveal">
          En caso de que el sitio ofrezca funciones que requieran registro o creación de cuentas de usuario, el
          usuario acepta proporcionar información veraz, completa y actualizada. Será responsable de mantener la
          confidencialidad de su contraseña y del uso que se haga de su cuenta.
        </p>
        <p className="scroll-reveal">
          Febacode se reserva el derecho de suspender o eliminar cuentas que presenten actividad sospechosa,
          información falsa o uso indebido.
        </p>

        <h3 className="scroll-reveal">15. Responsabilidad del Usuario sobre Contenidos Compartidos</h3>
        <p className="scroll-reveal">
          Si el sitio permite a los usuarios subir, compartir o publicar contenido (por ejemplo, en blogs, foros o
          formularios), el usuario acepta que dicho contenido no infringe derechos de terceros ni contiene elementos
          ilegales, difamatorios o inapropiados.
        </p>
        <p className="scroll-reveal">
          Febacode no se responsabiliza por el contenido generado por usuarios, pero se reserva el derecho de eliminar
          o moderar cualquier contenido que viole estas disposiciones.
        </p>

        <h3 className="scroll-reveal">16. Uso de Cookies y Tecnologías de Rastreo</h3>
        <p className="scroll-reveal">
          El sitio web de Febacode utiliza cookies y tecnologías similares para mejorar la experiencia del usuario,
          analizar tendencias y administrar el sitio. Al navegar por el sitio, el usuario acepta el uso de estas
          tecnologías conforme al Aviso de Privacidad.
        </p>
        <p className="scroll-reveal">
          El usuario puede configurar su navegador para rechazar las cookies, aunque esto podría afectar algunas
          funcionalidades del sitio.
        </p>

        <h3 className="scroll-reveal">17. Fuerza Mayor</h3>
        <p className="scroll-reveal">
          Febacode no será responsable por el incumplimiento o retraso en el cumplimiento de sus obligaciones debido
          a causas fuera de su control razonable, incluyendo pero no limitado a desastres naturales, cortes de
          energía, conflictos laborales, disturbios civiles, actos gubernamentales o fallos de proveedores de
          servicios.
        </p>

        <h3 className="scroll-reveal">18. Contacto y Soporte</h3>
        <p className="scroll-reveal">
          Para cualquier duda, comentario o solicitud relacionada con estos Términos y Condiciones, los usuarios
          pueden comunicarse con el equipo de Febacode a través del correo electrónico oficial
          [correo@febacode.com] o mediante los formularios de contacto disponibles en el sitio.
        </p>

        <h3 className="scroll-reveal">19. Ley Aplicable a los Servicios Contratados</h3>
        <p className="scroll-reveal">
          En caso de que Febacode ofrezca servicios específicos a través de este sitio web, la contratación de dichos
          servicios estará sujeta a las leyes aplicables en la Ciudad de México y a los términos y condiciones
          particulares que se establezcan para cada servicio. En caso de conflicto entre estos Términos y Condiciones
          generales y los términos y condiciones particulares de un servicio, prevalecerán estos últimos en lo
          específico.
        </p>

        <h3 className="scroll-reveal">20. Renuncia de Acciones Legales</h3>
        <p className="scroll-reveal">
          Al utilizar este sitio web, el usuario acepta irrevocablemente renunciar a cualquier acción legal, demanda o
          reclamación que pudiera tener contra Febacode, sus directivos, empleados, afiliados o proveedores, derivada
          del uso del sitio web o de la interpretación o aplicación de estos Términos y Condiciones, salvo en aquellos
          casos en que dicha renuncia esté expresamente prohibida por la ley aplicable.
        </p>
      </div>
    </div>
  );
}
