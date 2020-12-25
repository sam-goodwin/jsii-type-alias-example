export class Hello {
  public sayHello() {

    return 'hello, world!';
  }
}

declare const schema: PersonSchema;
schema.properties.age 
schema.properties.name
schema.properties.tags

export interface Person {
  readonly name: string;
  readonly age: number;
  readonly tags: Record<string, string>;
}

export interface PersonSchema extends JsonSchema<Person> {}

// type JsonRecord<T extends Record<string, any>> =
type JsonSchema<T> =
  T extends string ? {
    readonly type: 'string';
  } :
    T extends number ? {
      readonly type: 'number';
    } :
      T extends boolean ? {
        readonly type: 'boolean';
      } :
        T extends null ? {
          readonly type: 'null';
        } :
          T extends (infer I)[] ? {
            readonly type: 'array';
            readonly items: JsonSchema<I>;
          } :
            T extends Record<string, any> ? {
              readonly type: 'object';
              readonly properties: {
                readonly [k in keyof T]: JsonSchema<T[k]>;
              };
            } :
              never
;

