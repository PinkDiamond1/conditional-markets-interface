(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{498:function(module){eval('module.exports = {"contractName":"IERC20","abi":[{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x","deployedBytecode":"0x","sourceMap":"","deployedSourceMap":"","source":"pragma solidity >0.4.24;\\n\\n/**\\n * @title ERC20 interface\\n * @dev see https://github.com/ethereum/EIPs/issues/20\\n */\\ninterface IERC20 {\\n  function totalSupply() external view returns (uint256);\\n\\n  function balanceOf(address who) external view returns (uint256);\\n\\n  function allowance(address owner, address spender)\\n    external view returns (uint256);\\n\\n  function transfer(address to, uint256 value) external returns (bool);\\n\\n  function approve(address spender, uint256 value)\\n    external returns (bool);\\n\\n  function transferFrom(address from, address to, uint256 value)\\n    external returns (bool);\\n\\n  event Transfer(\\n    address indexed from,\\n    address indexed to,\\n    uint256 value\\n  );\\n\\n  event Approval(\\n    address indexed owner,\\n    address indexed spender,\\n    uint256 value\\n  );\\n}\\n","sourcePath":"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol","ast":{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol","exportedSymbols":{"IERC20":[5379]},"id":5380,"nodeType":"SourceUnit","nodes":[{"id":5312,"literals":["solidity",">","0.4",".24"],"nodeType":"PragmaDirective","src":"0:24:19"},{"baseContracts":[],"contractDependencies":[],"contractKind":"interface","documentation":"@title ERC20 interface\\n@dev see https://github.com/ethereum/EIPs/issues/20","fullyImplemented":false,"id":5379,"linearizedBaseContracts":[5379],"name":"IERC20","nodeType":"ContractDefinition","nodes":[{"body":null,"documentation":null,"id":5317,"implemented":false,"kind":"function","modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","parameters":{"id":5313,"nodeType":"ParameterList","parameters":[],"src":"156:2:19"},"returnParameters":{"id":5316,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5315,"name":"","nodeType":"VariableDeclaration","scope":5317,"src":"182:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5314,"name":"uint256","nodeType":"ElementaryTypeName","src":"182:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"181:9:19"},"scope":5379,"src":"136:55:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5324,"implemented":false,"kind":"function","modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":5320,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5319,"name":"who","nodeType":"VariableDeclaration","scope":5324,"src":"214:11:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5318,"name":"address","nodeType":"ElementaryTypeName","src":"214:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"213:13:19"},"returnParameters":{"id":5323,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5322,"name":"","nodeType":"VariableDeclaration","scope":5324,"src":"250:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5321,"name":"uint256","nodeType":"ElementaryTypeName","src":"250:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"249:9:19"},"scope":5379,"src":"195:64:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5333,"implemented":false,"kind":"function","modifiers":[],"name":"allowance","nodeType":"FunctionDefinition","parameters":{"id":5329,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5326,"name":"owner","nodeType":"VariableDeclaration","scope":5333,"src":"282:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5325,"name":"address","nodeType":"ElementaryTypeName","src":"282:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5328,"name":"spender","nodeType":"VariableDeclaration","scope":5333,"src":"297:15:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5327,"name":"address","nodeType":"ElementaryTypeName","src":"297:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"281:32:19"},"returnParameters":{"id":5332,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5331,"name":"","nodeType":"VariableDeclaration","scope":5333,"src":"341:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5330,"name":"uint256","nodeType":"ElementaryTypeName","src":"341:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"340:9:19"},"scope":5379,"src":"263:87:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5342,"implemented":false,"kind":"function","modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":5338,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5335,"name":"to","nodeType":"VariableDeclaration","scope":5342,"src":"372:10:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5334,"name":"address","nodeType":"ElementaryTypeName","src":"372:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5337,"name":"value","nodeType":"VariableDeclaration","scope":5342,"src":"384:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5336,"name":"uint256","nodeType":"ElementaryTypeName","src":"384:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"371:27:19"},"returnParameters":{"id":5341,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5340,"name":"","nodeType":"VariableDeclaration","scope":5342,"src":"417:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5339,"name":"bool","nodeType":"ElementaryTypeName","src":"417:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"416:6:19"},"scope":5379,"src":"354:69:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5351,"implemented":false,"kind":"function","modifiers":[],"name":"approve","nodeType":"FunctionDefinition","parameters":{"id":5347,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5344,"name":"spender","nodeType":"VariableDeclaration","scope":5351,"src":"444:15:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5343,"name":"address","nodeType":"ElementaryTypeName","src":"444:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5346,"name":"value","nodeType":"VariableDeclaration","scope":5351,"src":"461:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5345,"name":"uint256","nodeType":"ElementaryTypeName","src":"461:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"443:32:19"},"returnParameters":{"id":5350,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5349,"name":"","nodeType":"VariableDeclaration","scope":5351,"src":"498:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5348,"name":"bool","nodeType":"ElementaryTypeName","src":"498:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"497:6:19"},"scope":5379,"src":"427:77:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5362,"implemented":false,"kind":"function","modifiers":[],"name":"transferFrom","nodeType":"FunctionDefinition","parameters":{"id":5358,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5353,"name":"from","nodeType":"VariableDeclaration","scope":5362,"src":"530:12:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5352,"name":"address","nodeType":"ElementaryTypeName","src":"530:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5355,"name":"to","nodeType":"VariableDeclaration","scope":5362,"src":"544:10:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5354,"name":"address","nodeType":"ElementaryTypeName","src":"544:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5357,"name":"value","nodeType":"VariableDeclaration","scope":5362,"src":"556:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5356,"name":"uint256","nodeType":"ElementaryTypeName","src":"556:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"529:41:19"},"returnParameters":{"id":5361,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5360,"name":"","nodeType":"VariableDeclaration","scope":5362,"src":"593:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5359,"name":"bool","nodeType":"ElementaryTypeName","src":"593:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"592:6:19"},"scope":5379,"src":"508:91:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"anonymous":false,"documentation":null,"id":5370,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":5369,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5364,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":5370,"src":"623:20:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5363,"name":"address","nodeType":"ElementaryTypeName","src":"623:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5366,"indexed":true,"name":"to","nodeType":"VariableDeclaration","scope":5370,"src":"649:18:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5365,"name":"address","nodeType":"ElementaryTypeName","src":"649:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5368,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":5370,"src":"673:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5367,"name":"uint256","nodeType":"ElementaryTypeName","src":"673:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"617:73:19"},"src":"603:88:19"},{"anonymous":false,"documentation":null,"id":5378,"name":"Approval","nodeType":"EventDefinition","parameters":{"id":5377,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5372,"indexed":true,"name":"owner","nodeType":"VariableDeclaration","scope":5378,"src":"715:21:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5371,"name":"address","nodeType":"ElementaryTypeName","src":"715:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5374,"indexed":true,"name":"spender","nodeType":"VariableDeclaration","scope":5378,"src":"742:23:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5373,"name":"address","nodeType":"ElementaryTypeName","src":"742:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5376,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":5378,"src":"771:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5375,"name":"uint256","nodeType":"ElementaryTypeName","src":"771:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"709:79:19"},"src":"695:94:19"}],"scope":5380,"src":"115:676:19"}],"src":"0:792:19"},"legacyAST":{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol","exportedSymbols":{"IERC20":[5379]},"id":5380,"nodeType":"SourceUnit","nodes":[{"id":5312,"literals":["solidity",">","0.4",".24"],"nodeType":"PragmaDirective","src":"0:24:19"},{"baseContracts":[],"contractDependencies":[],"contractKind":"interface","documentation":"@title ERC20 interface\\n@dev see https://github.com/ethereum/EIPs/issues/20","fullyImplemented":false,"id":5379,"linearizedBaseContracts":[5379],"name":"IERC20","nodeType":"ContractDefinition","nodes":[{"body":null,"documentation":null,"id":5317,"implemented":false,"kind":"function","modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","parameters":{"id":5313,"nodeType":"ParameterList","parameters":[],"src":"156:2:19"},"returnParameters":{"id":5316,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5315,"name":"","nodeType":"VariableDeclaration","scope":5317,"src":"182:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5314,"name":"uint256","nodeType":"ElementaryTypeName","src":"182:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"181:9:19"},"scope":5379,"src":"136:55:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5324,"implemented":false,"kind":"function","modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":5320,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5319,"name":"who","nodeType":"VariableDeclaration","scope":5324,"src":"214:11:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5318,"name":"address","nodeType":"ElementaryTypeName","src":"214:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"213:13:19"},"returnParameters":{"id":5323,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5322,"name":"","nodeType":"VariableDeclaration","scope":5324,"src":"250:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5321,"name":"uint256","nodeType":"ElementaryTypeName","src":"250:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"249:9:19"},"scope":5379,"src":"195:64:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5333,"implemented":false,"kind":"function","modifiers":[],"name":"allowance","nodeType":"FunctionDefinition","parameters":{"id":5329,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5326,"name":"owner","nodeType":"VariableDeclaration","scope":5333,"src":"282:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5325,"name":"address","nodeType":"ElementaryTypeName","src":"282:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5328,"name":"spender","nodeType":"VariableDeclaration","scope":5333,"src":"297:15:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5327,"name":"address","nodeType":"ElementaryTypeName","src":"297:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"281:32:19"},"returnParameters":{"id":5332,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5331,"name":"","nodeType":"VariableDeclaration","scope":5333,"src":"341:7:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5330,"name":"uint256","nodeType":"ElementaryTypeName","src":"341:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"340:9:19"},"scope":5379,"src":"263:87:19","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5342,"implemented":false,"kind":"function","modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":5338,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5335,"name":"to","nodeType":"VariableDeclaration","scope":5342,"src":"372:10:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5334,"name":"address","nodeType":"ElementaryTypeName","src":"372:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5337,"name":"value","nodeType":"VariableDeclaration","scope":5342,"src":"384:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5336,"name":"uint256","nodeType":"ElementaryTypeName","src":"384:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"371:27:19"},"returnParameters":{"id":5341,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5340,"name":"","nodeType":"VariableDeclaration","scope":5342,"src":"417:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5339,"name":"bool","nodeType":"ElementaryTypeName","src":"417:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"416:6:19"},"scope":5379,"src":"354:69:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5351,"implemented":false,"kind":"function","modifiers":[],"name":"approve","nodeType":"FunctionDefinition","parameters":{"id":5347,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5344,"name":"spender","nodeType":"VariableDeclaration","scope":5351,"src":"444:15:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5343,"name":"address","nodeType":"ElementaryTypeName","src":"444:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5346,"name":"value","nodeType":"VariableDeclaration","scope":5351,"src":"461:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5345,"name":"uint256","nodeType":"ElementaryTypeName","src":"461:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"443:32:19"},"returnParameters":{"id":5350,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5349,"name":"","nodeType":"VariableDeclaration","scope":5351,"src":"498:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5348,"name":"bool","nodeType":"ElementaryTypeName","src":"498:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"497:6:19"},"scope":5379,"src":"427:77:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":null,"id":5362,"implemented":false,"kind":"function","modifiers":[],"name":"transferFrom","nodeType":"FunctionDefinition","parameters":{"id":5358,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5353,"name":"from","nodeType":"VariableDeclaration","scope":5362,"src":"530:12:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5352,"name":"address","nodeType":"ElementaryTypeName","src":"530:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5355,"name":"to","nodeType":"VariableDeclaration","scope":5362,"src":"544:10:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5354,"name":"address","nodeType":"ElementaryTypeName","src":"544:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5357,"name":"value","nodeType":"VariableDeclaration","scope":5362,"src":"556:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5356,"name":"uint256","nodeType":"ElementaryTypeName","src":"556:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"529:41:19"},"returnParameters":{"id":5361,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5360,"name":"","nodeType":"VariableDeclaration","scope":5362,"src":"593:4:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":5359,"name":"bool","nodeType":"ElementaryTypeName","src":"593:4:19","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"592:6:19"},"scope":5379,"src":"508:91:19","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"anonymous":false,"documentation":null,"id":5370,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":5369,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5364,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":5370,"src":"623:20:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5363,"name":"address","nodeType":"ElementaryTypeName","src":"623:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5366,"indexed":true,"name":"to","nodeType":"VariableDeclaration","scope":5370,"src":"649:18:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5365,"name":"address","nodeType":"ElementaryTypeName","src":"649:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5368,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":5370,"src":"673:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5367,"name":"uint256","nodeType":"ElementaryTypeName","src":"673:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"617:73:19"},"src":"603:88:19"},{"anonymous":false,"documentation":null,"id":5378,"name":"Approval","nodeType":"EventDefinition","parameters":{"id":5377,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5372,"indexed":true,"name":"owner","nodeType":"VariableDeclaration","scope":5378,"src":"715:21:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5371,"name":"address","nodeType":"ElementaryTypeName","src":"715:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5374,"indexed":true,"name":"spender","nodeType":"VariableDeclaration","scope":5378,"src":"742:23:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5373,"name":"address","nodeType":"ElementaryTypeName","src":"742:7:19","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5376,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":5378,"src":"771:13:19","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5375,"name":"uint256","nodeType":"ElementaryTypeName","src":"771:7:19","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"709:79:19"},"src":"695:94:19"}],"scope":5380,"src":"115:676:19"}],"src":"0:792:19"},"compiler":{"name":"solc","version":"0.5.1+commit.c8a2cb62.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.1","updatedAt":"2019-02-25T17:05:13.245Z","devdoc":{"details":"see https://github.com/ethereum/EIPs/issues/20","methods":{},"title":"ERC20 interface"},"userdoc":{"methods":{}}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0OTguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///498\n')}}]);