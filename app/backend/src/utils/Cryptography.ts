import { hashSync, compareSync } from 'bcryptjs';

export default class Cryptography {
  public static generate(password: string) {
    const hash = hashSync(password, 10);
    return hash;
  }

  public static validate(password: string, userHash: string) {
    const compare = compareSync(password, userHash);
    return compare;
  }
}
