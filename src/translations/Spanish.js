// @flow
import type { TRANSLATION_OBJ } from '../types'

export const SPANISH_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'cargando...',
    address: 'Dirección',
    privateKey: 'Llave privada',
    cancel: 'Cancelar',
    fees: 'Tarifas',
    version: 'Versión',
    in: 'Entrantes',
    out: 'Salientes'
  },
  MainPage: {
    title: 'Billetera BZC',
    value: 'Valor',
    send: 'Enviar',
    received: 'Recibido',
    sent: 'Enviado',
    noTxFound: 'No se encontró ningún historial de trancción.',
    noConnection: 'Conexión denegada.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Copiar Dirección al Portapapeles'
  },
  SendPage: {
    title: 'Enviar un BZC',
    payTo: 'Pagar a',
    amountToPay: 'Monto a pagar',
    balance: 'Balance',
    networkFee: 'Tarifa de Red',
    slowTx: 'Trancción Lenta',
    fastTx: 'Transacción Rápida',
    from: 'De',
    toAddress: 'Dirigido a',
    amount: 'Monto',
    max: 'Máx',
    send: 'Enviar',
    txSuccessful: '¡Transacción exitosa! Haga clic aquí para ver su transacción.',
    confirmSend: 'Quiero enviar estos BZC',
    invalidAddress: '`Dirigido a` inválido, sólo las direcciones transparentes son compatibles en este momento.',
    invalidAmount: '`Monto` Inválido.',
    invalidFee: '`Tarifas` Inválidas. Intente con 0 :)',
    bitzecAmount: 'Monto debe ser mayor a 0.',
    notEnoughZEN: 'No hay suficiente BZC confirmado en la cuenta para realizar la transacción.',
    noCameraPermissions: 'No hay permisos de cámara. Puede permitir el acceso de la cámara en su configuración.'
  },
  TxDetailPage: {
    txid: 'Id de Transacción',
    blockhash: 'Hash del Bloque',
    blockheight: 'Altura del bloque',
    confirmations: 'Confirmaciones'
  },
  SettingsPage: {
    title: 'Configuraciones',
    language: 'Lenguaje',
    currency: 'Moneda',
    secretPhrase: 'Mostrar Frase Secreta',
    showPrivateKeys: 'Mostrar Llaves Privadas',
    recoverExistingWallet: 'Recuperar Billetera existente',
    current: 'Actual'
  },
  SecretPhrasePage: {
    title: 'Frase Secreta'
  },
  ShowPrivateKeyPage: {
    title: 'Llaves Privadas'
  },
  RecoverExistingWalletPage: {
    title: 'Recuperar Billetera existente',
    secretPhrase: 'Frase Secreta',
    textareaPlaceholder: 'Frase secreta. Mínimo 16 caracteres.',
    confirmUnderstand: 'Entiendo que recuperando la billetera existente, mi billetera actual se borrará.',
    recover: 'Recuperar'
  },
  AboutPage: {
    title: 'Acerca de'
  },
  PinPage: {
    changePinTitle: 'Cambiar PIN',
    newPinPageTitle: 'Configuración de Billetera BZC',
    verifyPinPageTitle: 'Verificación PIN de Billetera BZC',
    setupNewPin: 'Configurar un nuevo PIN de 4 dígitos',
    reenterPin: 'Vuelva a introducir su PIN',
    pinsNotSimilar: 'Los PINs introducidos no coinciden',
    invalidPin: 'PIN Inválido',
    enterYourPin: 'Ingrese su PIN de 4 dígitos'
  },
  ContactsPage: {
    contacts: 'Contacts',
    contactsName: 'Name',
    contactsAddress: 'Address',
    noContactsFound: 'No contacts found.'
  }
}
