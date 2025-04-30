package mypackage;

public class View {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setNombre("Juan");
        cliente.setApellido("Pérez");
        cliente.setFechaNacimiento("2004-05-15");
        cliente.setTelefono("123456789");
        cliente.CalcularEdad(); 

        Producto producto = new Producto();
        producto.setNombre("Laptop");
        producto.setPrecio(1500000.00);
        producto.setCantidad(3);
        double total = producto.CalcularTotal();

        System.out.println("El total a pagar es: "+ total);
    }
}
