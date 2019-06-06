export class Character {
    id: number = 0;
    health: number = 0;
    level: number = 1;
    isAlive: boolean = true;

    constructor(options: {
        id?: number,
        health?: number,
        level?: number,
        isAlive?: boolean
    }) { 
      // setup base character with defaults
      this.id = options.id || Math.round(Math.random() * 1000000000);
      this.health = options.health || 1000;
      this.level = options.level || 1;
      this.isAlive = options.isAlive || true;
    }
    
    // when character takes damage
    takeDamage(amount: number) {
      this.health = 1000 - amount;
      this.isAlive = this.health <= 1 ? false : true;    
    }
    
    // when character gets healed
    takeHealth(amount: number) {
       const health = this.isAlive ? this.health + amount : 0;
       if(health > 1000) { 
        this.health = 1000;
        return;
       }
       this.health = health;
    }
    
    attackTarget(target: Character, amount: number) {
      if(target.id === this.id) {
        console.error('You may not attack yourself.');
        return;
      }
      target.health = target.health - amount;
    }

    healTarget(target: Character, amount: number) {
      if(target.id !== this.id) {
        return;
      }
      this.health = this.health + amount;
    }
  }
  