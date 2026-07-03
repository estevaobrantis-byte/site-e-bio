javascriptfunction responderSimulado(escolha) {
    const feedback = document.getElementById('resultado-simulador');
    
    // Remove classes antigas de estilo
    feedback.classList.remove('hidden', 'feedback-success', 'feedback-danger');
    
    if (escolha === 'clicar') {
        feedback.innerHTML = `
            <strong>⚠️ Alerta de Vulnerabilidade!</strong><br>
            Se este fosse um cenário real, você poderia ter exposto os seus dados bancários! 
            Bancos reais nunca usam links encurtados de forma genérica (como <em>bit.ly</em>) em SMS urgentes. 
            O <strong>Marco Civil da Internet</strong> exige consentimento transparente, mas criminosos ignoram isso completamente.
        `;
        feedback.classList.add('feedback-danger');
    } else if (escolha === 'ignorar') {
        feedback.innerHTML = `
            <strong>🎉 Excelente Decisão Protetiva!</strong><br>
            Você agiu como um verdadeiro cidadão digital consciente. Ignorar mensagens alarmistas e conferir 
            diretamente nos canais oficiais é a melhor forma de se blindar contra a Engenharia Social. 
            Suas informações continuam seguras sob os termos de proteção da <strong>LGPD</strong>!
        `;
        feedback.classList.add('feedback-success');
    }
}
