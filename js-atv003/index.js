class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(novoSaldo) {
      this._saldo = novoSaldo;
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
        alert(`Saque de R$${valor} realizado com sucesso.`);
      } else {
        alert('Saldo insuficiente para realizar o saque.');
      }
    }
  
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
        alert(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        alert('Valor de depósito inválido.');
      }
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
      super(agencia, numero, 'Conta Corrente', saldo);
      this.cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(novoCartaoCredito) {
      this._cartaoCredito = novoCartaoCredito;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, 'Conta Poupança', saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, 'Conta Universitária', saldo);
    }
  
    sacar(valor) {
      if (valor <= 500) {
        super.sacar(valor);
      } else {
        alert('Saque não permitido. O valor máximo de saque para uma conta universitária é de R$500.');
      }
    }
  }
  
  // Exemplo de uso:
  const contaCorrente = new ContaCorrente('123', '45678', 1000, 500);
  alert(JSON.stringify(contaCorrente, null, 2));
  contaCorrente.depositar(parseFloat(prompt('Digite o valor para depositar:')));
  contaCorrente.sacar(parseFloat(prompt('Digite o valor para sacar:')));
  alert(JSON.stringify(contaCorrente, null, 2));
  
  const contaPoupanca = new ContaPoupanca('456', '78910', 5000);
  alert(JSON.stringify(contaPoupanca, null, 2));
  
  const contaUniversitaria = new ContaUniversitaria('789', '101112', 1000);
  alert(JSON.stringify(contaUniversitaria, null, 2));
  contaUniversitaria.sacar(parseFloat(prompt('Digite o valor para sacar na conta universitária (limite de R$500):')));
  