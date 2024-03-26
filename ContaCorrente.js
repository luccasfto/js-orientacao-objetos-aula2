import { Cliente } from "./Cliente.js";

//classe
export  class ContaCorrente{
    static numeroDeContas = 0;
    agencia; //atributos

    _cliente;

    set cliente(novoValor){ //parece um método
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor (agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas +=1; //numero exato de contas em aberto
    }

    sacar(valor){ //metodos
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){ //metodos
        if(valor <= 0)
        {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){ //metodos //parametro conta representa um objeto dentro de um método

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
