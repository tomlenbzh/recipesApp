import { RecipeModel } from '../models/recipe.model';
import { TypesData } from './types.data';
import { DifficultyData } from './difficulty.data';
import { CostData } from './cost.data';

export const RecipesData: RecipeModel[] = [{
  id: 1,
  name: 'Tartiflette',
  types: [TypesData[1]],
  images: ['', ''],
  people: 2,
  difficulty: DifficultyData[0],
  time: {
    total: '1h15',
    prep: '1h',
    cooking: '15 min'
  },
  cost: CostData[0],
  country: 'France',
  ingredients: [
    '1 kg de pomme de terre',
    '200 g de lardons fumés',
    `200 g d'oignon émincés`,
    `1 reblochon bien fait (lorsqu'on appuie sur le côté du reblochon, le doigt doit s'enfoncer un peu)`,
    `2 cuillères à soupe d'huile`,
    `1 gousse d'ail`,
    `Sel`,
    `Poivre`
  ],
  instructions: [{
    order: 1,
    text: `Eplucher les pommes de terre, les couper en dés, bien les rincer et les essuyer dans un torchon propre.`
  }, {
    order: 2,
    text: `Faire chauffer l'huile dans une poêle, y faire fondre les oignons.`
  }, {
    order: 3,
    text: `Lorsque les oignons sont fondus, ajouter les pommes de terre et les faire dorer de tous les côtés.`
  }, {
    order: 4,
    text: `Lorsqu'elles sont dorées, ajouter les lardons et finir de cuire.`
  }, {
    order: 5,
    text: `D'autre part, gratter la croûte du reblochon et le couper en deux (ou en quatre).`
  }, {
    order: 6,
    text: `Préchauffer le four à 200°C (thermostat 6-7) et préparer un plat à gratin en frottant le fond et les bords avec la gousse d'ail épluchée.`
  }, {
    order: 7,
    text: `Dans le plat à gratin, étaler une couche de pommes de terre aux lardons, disposer dessus la moitié du reblochon, puis de nouveau des pommes de terre. Terminer avec le reste du reblochon (croûte vers les pommes de terre).`
  }, {
    order: 8,
    text: `Enfourner pour environ 20 minutes de cuisson.`
  }]
}];
