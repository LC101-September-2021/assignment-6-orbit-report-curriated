export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(satelliteType: string): boolean {
		this.orbitType = satelliteType;
		if(satelliteType === 'Space Debris'){
			return true;
		} else {
			return false;
		}
   }

}

// TODO 3a: fix isSpaceDebris check
