# TypeScript eta Jest abiapuntua

> *OHARRA: Template hau egiteko [typescript-basic-skeleton](https://github.com/CodelyTV/typescript-basic-skeleton) eta [TypeScriptKatas](https://github.com/CodelyTV/typescript-basic-skeleton) proiektuetan oinarritu naiz neurri batean.*

Template honen helburua TypeScript eta Jest erabiliz proiektu bat sortzeko abiapuntu izatea da.

## Nola erabili

### Dependentziak instalatu

```bash
npm install
```

### Testak behin exekutatu

```bash
npm test
```

### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

### Lintern erroreak egiaztatu

```bash
npm run lint
```

### Lintern erroreak zuzendu

```bash
npm run lint:fix
```

## Hook-ak
Proiektuak `pre-commit` hook bat dakar `commit` egiten den bakoitzean automatikoki testak exekutatu ditzan.

Hau ekidin nahi bada `--no-verify` erabil daiteke `commit` egiterakoan.
