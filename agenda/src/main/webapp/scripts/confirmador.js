/**
 * Confirmar a exclusao de um contarto
 * @author Jeferson Freitas
 * @param idcon 
 */

function confirmar (idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta ===true) {
		window.location.href = "delete?idcon=" + idcon
	}
}