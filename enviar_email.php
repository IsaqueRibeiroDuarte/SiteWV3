<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // E-mail para onde os dados serão enviados
    $para = "silg.duarte21@gmail.com";  // Substitua pelo seu endereço de e-mail

    // Assunto do e-mail
    $assunto = "Mensagem de $nome através do formulário de contato";

    // Conteúdo do e-mail
    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Mensagem: $mensagem\n";

    // Cabeçalhos adicionais
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($para, $assunto, $corpo, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
}
?>

if (mail($para, $assunto, $corpo, $headers)) {
    header("Location: sucesso.html"); // Redireciona para uma página de sucesso
    exit();
} else {
    echo "Falha ao enviar o e-mail.";
}