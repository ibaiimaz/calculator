# Calculator

Honakoa kalkulagailu basiko bat da. Batuketak, kenketak, biderkaketak eta zatiketak burutu ditzake.

## Egin beharrekoa

- [x] Existitzen diren metodoei testak gehitu (*Arrage/Act/Assert , Given/When/Then*)
- [x] Zerogatik zatitzen saiatzean errore bat jaurti
- [x] Kenketaren kasuan, emaitzak dezimalak badauzka, borobildu
- [ ] Kenketaren kasuan, emaitza negatiboa bada, errore bat jaurti
- [ ] `describe`/`context` erabili
- [ ] `beforeEach` erabili

---

### Nola erabili

#### Dependentziak instalatu

```bash
npm install
```

#### Testak behin exekutatu

```bash
npm test
```

#### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

#### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

#### Lintern erroreak egiaztatu

```bash
npm run lint
```

#### Lintern erroreak zuzendu

```bash
npm run lint:fix
```

### Hook-ak

Proiektuak `pre-commit` hook bat dakar `commit` egiten den bakoitzean automatikoki testak exekutatu ditzan.

Hau ekidin nahi bada `--no-verify` erabil daiteke `commit` egiterakoan.
