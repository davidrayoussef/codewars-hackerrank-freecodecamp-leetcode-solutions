/*
Create a GeneticAlgorithm class with a few methods.

generate() generates a random chromosome (string of 1s and 0s) of a given length (use this in your run method to create
a population).

crossover() takes in two chromosomes and returns a crossed-over pair.

mutate() takes a chromosome and a probability and returns a mutated chromosome.

select() will take a population and a corresponding list of fitnesses and return two chromosomes selected with the
roulette wheel method.

run() will take a fitness function that accepts a chromosome and returns the fitness of that chromosome, the length of
the chromosomes to generate (should be the same length as the goal chromosome), the crossover and mutation probabilities,
and an optional number of iterations (default to 100). Make the population size 100. After the iterations are finished,
the method returns the chromosome it deemed to be fittest. What the test will do is generate a random binary string of
35 digits and your algorithm must discover that string! The fitness will be calculated in a way similar to above, where the
score of a chromosome is the number of bits that differ from the goal string.

The crossover probability we will use is 0.6 and the mutation probability we will use is 0.002. Now, since the chromosome
length is small, 100 iterations should be enough to get the correct answer every time. The test fixture will run the
algorithm 10 times on 10 different goal strings.
*/

class GeneticAlgorithm {
  constructor() {
    this.poluationCount = 100;
    this.population = [];
  }

  generate(length) {
    return Array
      .from({length})
      .map(_ => Math.random() < .5 ? '0' : '1')
      .join('');
  }

  crossover(chromosome1, chromosome2) {
    const randomPoint = Math.floor(Math.random() * chromosome1.length);
    return chromosome1.slice(0, randomPoint) + chromosome2.slice(randomPoint);
  }

  mutate(chromosome, mutationRate) {
    return chromosome
      .split('')
      .map(v => Math.random() < mutationRate ? Math.abs(v - 1) : v)
      .join('');
  }

  select(population, fitnesses, crossoverRate, mutationRate) {
    const maxFitness = Math.max(...fitnesses);

    const acceptOrReject = (pop) => {
      while (true) {
        let randomIndex = Math.floor(Math.random() * pop.length);
        let randomFitness = Math.random() * maxFitness;
        let randomPartner = population[randomIndex];
        let randomPartnerFitness = fitnesses[randomIndex];

        if (randomFitness < randomPartnerFitness) {
          return randomPartner;
        }
      }
    };

    let newGeneration = [];

    for (let i = 0; i < population.length; i++) {
      if (Math.random() < crossoverRate) {
        let parentA = acceptOrReject(population);
        let parentB = acceptOrReject(population);

        while (parentA === parentB) parentB = acceptOrReject(population);

        newGeneration.push( this.crossover(parentA, parentB) );
      } else newGeneration.push(population[i]);
    }

    return newGeneration.map(chromosome => {
      return this.mutate(chromosome, mutationRate);
    });
  }

  run(fitness, length, p_c, p_m, iterations = 100) {
    for (let i = 0; i < this.poluationCount; i++) {
      this.population.push( this.generate(length) );
    }

    for (let i = 0; i < iterations; i++) {
      let fitnesses = this.population.map(fitness);
      let newPopulation = this.select(this.population, fitnesses, p_c, p_m);

      this.population = newPopulation;
    }

    const highestFitness = this.population.reduce((highest,curr) => {
      let currentFitness = fitness(curr);
      return currentFitness > highest[0] ? [currentFitness,curr] : highest;
    }, [0, '']);

    return highestFitness[1];
  }
}

const goal = '10101001100110111010000100000101001';
const fitness = (chromosome, total = 0) => {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== chromosome[i]) total++;
  }
  return 1 / (total + 1);
};

let g = new GeneticAlgorithm();
g.run(fitness, 35, 0.6, 0.002);
