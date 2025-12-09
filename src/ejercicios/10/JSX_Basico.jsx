const JSXBasico = () => {
    const element = <h1>Hello World</h1>;

    const combined = (
    <div>
    <h1>Hola</h1>
    <h2>Subtítulo</h2>
    <h3>Más contenido</h3>
    </div>
    );

    return (
    <div>
    <h2>Ejercicio 010 – JSX Básico</h2>
    {element}
    {combined}
    </div>
    );
};

export default JSXBasico;
