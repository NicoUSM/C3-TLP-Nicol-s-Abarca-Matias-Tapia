
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Tipo
 * 
 */
export type Tipo = $Result.DefaultSelection<Prisma.$TipoPayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Arriendo
 * 
 */
export type Arriendo = $Result.DefaultSelection<Prisma.$ArriendoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Perfils
 * const perfils = await prisma.perfil.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Perfils
   * const perfils = await prisma.perfil.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo`: Exposes CRUD operations for the **Tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos
    * const tipos = await prisma.tipo.findMany()
    * ```
    */
  get tipo(): Prisma.TipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arriendo`: Exposes CRUD operations for the **Arriendo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arriendos
    * const arriendos = await prisma.arriendo.findMany()
    * ```
    */
  get arriendo(): Prisma.ArriendoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Perfil: 'Perfil',
    Usuario: 'Usuario',
    Tipo: 'Tipo',
    Vehiculo: 'Vehiculo',
    Arriendo: 'Arriendo',
    Cliente: 'Cliente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "perfil" | "usuario" | "tipo" | "vehiculo" | "arriendo" | "cliente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Tipo: {
        payload: Prisma.$TipoPayload<ExtArgs>
        fields: Prisma.TipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findFirst: {
            args: Prisma.TipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findMany: {
            args: Prisma.TipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          create: {
            args: Prisma.TipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          createMany: {
            args: Prisma.TipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          update: {
            args: Prisma.TipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          aggregate: {
            args: Prisma.TipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo>
          }
          groupBy: {
            args: Prisma.TipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Arriendo: {
        payload: Prisma.$ArriendoPayload<ExtArgs>
        fields: Prisma.ArriendoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArriendoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArriendoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          findFirst: {
            args: Prisma.ArriendoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArriendoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          findMany: {
            args: Prisma.ArriendoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>[]
          }
          create: {
            args: Prisma.ArriendoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          createMany: {
            args: Prisma.ArriendoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArriendoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          update: {
            args: Prisma.ArriendoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          deleteMany: {
            args: Prisma.ArriendoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArriendoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArriendoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          aggregate: {
            args: Prisma.ArriendoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArriendo>
          }
          groupBy: {
            args: Prisma.ArriendoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArriendoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArriendoCountArgs<ExtArgs>
            result: $Utils.Optional<ArriendoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    perfil?: PerfilOmit
    usuario?: UsuarioOmit
    tipo?: TipoOmit
    vehiculo?: VehiculoOmit
    arriendo?: ArriendoOmit
    cliente?: ClienteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    usuarios: number
  }

  export type PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PerfilCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    arriendos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | UsuarioCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
  }


  /**
   * Count Type TipoCountOutputType
   */

  export type TipoCountOutputType = {
    vehiculos: number
  }

  export type TipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | TipoCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCountOutputType
     */
    select?: TipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
  }


  /**
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    arriendos: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | VehiculoCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: number
    nombre: string
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>



  export type PerfilSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Perfil$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'Int'>
    readonly nombre: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil.usuarios
   */
  export type Perfil$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    identificador: string | null
    nombre: string | null
    password: string | null
    perfilId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    identificador: string | null
    nombre: string | null
    password: string | null
    perfilId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    identificador: number
    nombre: number
    password: number
    perfilId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    identificador?: true
    nombre?: true
    password?: true
    perfilId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    identificador?: true
    nombre?: true
    password?: true
    perfilId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    identificador?: true
    nombre?: true
    password?: true
    perfilId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    identificador: string
    nombre: string
    password: string
    perfilId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identificador?: boolean
    nombre?: boolean
    password?: boolean
    perfilId?: boolean
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    arriendos?: boolean | Usuario$arriendosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    identificador?: boolean
    nombre?: boolean
    password?: boolean
    perfilId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identificador" | "nombre" | "password" | "perfilId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    arriendos?: boolean | Usuario$arriendosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs>
      arriendos: Prisma.$ArriendoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      identificador: string
      nombre: string
      password: string
      perfilId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arriendos<T extends Usuario$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly identificador: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly perfilId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.arriendos
   */
  export type Usuario$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    cursor?: ArriendoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Tipo
   */

  export type AggregateTipo = {
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  export type TipoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type TipoAvgAggregateInputType = {
    id?: true
  }

  export type TipoSumAggregateInputType = {
    id?: true
  }

  export type TipoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type TipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo to aggregate.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipos
    **/
    _count?: true | TipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoMaxAggregateInputType
  }

  export type GetTipoAggregateType<T extends TipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo[P]>
      : GetScalarType<T[P], AggregateTipo[P]>
  }




  export type TipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoWhereInput
    orderBy?: TipoOrderByWithAggregationInput | TipoOrderByWithAggregationInput[]
    by: TipoScalarFieldEnum[] | TipoScalarFieldEnum
    having?: TipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCountAggregateInputType | true
    _avg?: TipoAvgAggregateInputType
    _sum?: TipoSumAggregateInputType
    _min?: TipoMinAggregateInputType
    _max?: TipoMaxAggregateInputType
  }

  export type TipoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  type GetTipoGroupByPayload<T extends TipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoGroupByOutputType[P]>
        }
      >
    >


  export type TipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    vehiculos?: boolean | Tipo$vehiculosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo"]>



  export type TipoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type TipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["tipo"]>
  export type TipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | Tipo$vehiculosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["tipo"]>
    composites: {}
  }

  type TipoGetPayload<S extends boolean | null | undefined | TipoDefaultArgs> = $Result.GetResult<Prisma.$TipoPayload, S>

  type TipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCountAggregateInputType | true
    }

  export interface TipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo'], meta: { name: 'Tipo' } }
    /**
     * Find zero or one Tipo that matches the filter.
     * @param {TipoFindUniqueArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoFindUniqueArgs>(args: SelectSubset<T, TipoFindUniqueArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoFindUniqueOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoFindFirstArgs>(args?: SelectSubset<T, TipoFindFirstArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos
     * const tipos = await prisma.tipo.findMany()
     * 
     * // Get first 10 Tipos
     * const tipos = await prisma.tipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoWithIdOnly = await prisma.tipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoFindManyArgs>(args?: SelectSubset<T, TipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo.
     * @param {TipoCreateArgs} args - Arguments to create a Tipo.
     * @example
     * // Create one Tipo
     * const Tipo = await prisma.tipo.create({
     *   data: {
     *     // ... data to create a Tipo
     *   }
     * })
     * 
     */
    create<T extends TipoCreateArgs>(args: SelectSubset<T, TipoCreateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos.
     * @param {TipoCreateManyArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreateManyArgs>(args?: SelectSubset<T, TipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo.
     * @param {TipoDeleteArgs} args - Arguments to delete one Tipo.
     * @example
     * // Delete one Tipo
     * const Tipo = await prisma.tipo.delete({
     *   where: {
     *     // ... filter to delete one Tipo
     *   }
     * })
     * 
     */
    delete<T extends TipoDeleteArgs>(args: SelectSubset<T, TipoDeleteArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo.
     * @param {TipoUpdateArgs} args - Arguments to update one Tipo.
     * @example
     * // Update one Tipo
     * const tipo = await prisma.tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUpdateArgs>(args: SelectSubset<T, TipoUpdateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos.
     * @param {TipoDeleteManyArgs} args - Arguments to filter Tipos to delete.
     * @example
     * // Delete a few Tipos
     * const { count } = await prisma.tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeleteManyArgs>(args?: SelectSubset<T, TipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUpdateManyArgs>(args: SelectSubset<T, TipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo.
     * @param {TipoUpsertArgs} args - Arguments to update or create a Tipo.
     * @example
     * // Update or create a Tipo
     * const tipo = await prisma.tipo.upsert({
     *   create: {
     *     // ... data to create a Tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo we want to update
     *   }
     * })
     */
    upsert<T extends TipoUpsertArgs>(args: SelectSubset<T, TipoUpsertArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCountArgs} args - Arguments to filter Tipos to count.
     * @example
     * // Count the number of Tipos
     * const count = await prisma.tipo.count({
     *   where: {
     *     // ... the filter for the Tipos we want to count
     *   }
     * })
    **/
    count<T extends TipoCountArgs>(
      args?: Subset<T, TipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoAggregateArgs>(args: Subset<T, TipoAggregateArgs>): Prisma.PrismaPromise<GetTipoAggregateType<T>>

    /**
     * Group by Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoGroupByArgs['orderBy'] }
        : { orderBy?: TipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo model
   */
  readonly fields: TipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends Tipo$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tipo model
   */
  interface TipoFieldRefs {
    readonly id: FieldRef<"Tipo", 'Int'>
    readonly nombre: FieldRef<"Tipo", 'String'>
    readonly descripcion: FieldRef<"Tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo findUnique
   */
  export type TipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findUniqueOrThrow
   */
  export type TipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findFirst
   */
  export type TipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findFirstOrThrow
   */
  export type TipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findMany
   */
  export type TipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipos to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo create
   */
  export type TipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo.
     */
    data: XOR<TipoCreateInput, TipoUncheckedCreateInput>
  }

  /**
   * Tipo createMany
   */
  export type TipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo update
   */
  export type TipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo.
     */
    data: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
    /**
     * Choose, which Tipo to update.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo updateMany
   */
  export type TipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo upsert
   */
  export type TipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo to update in case it exists.
     */
    where: TipoWhereUniqueInput
    /**
     * In case the Tipo found by the `where` argument doesn't exist, create a new Tipo with this data.
     */
    create: XOR<TipoCreateInput, TipoUncheckedCreateInput>
    /**
     * In case the Tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
  }

  /**
   * Tipo delete
   */
  export type TipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter which Tipo to delete.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo deleteMany
   */
  export type TipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipos to delete
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to delete.
     */
    limit?: number
  }

  /**
   * Tipo.vehiculos
   */
  export type Tipo$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    cursor?: VehiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Tipo without action
   */
  export type TipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    id: number | null
    valorDiario: number | null
    tipoId: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    id: number | null
    valorDiario: number | null
    tipoId: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: number | null
    patente: string | null
    marca: string | null
    modelo: string | null
    valorDiario: number | null
    estado: string | null
    fotografia: string | null
    tipoId: number | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: number | null
    patente: string | null
    marca: string | null
    modelo: string | null
    valorDiario: number | null
    estado: string | null
    fotografia: string | null
    tipoId: number | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    patente: number
    marca: number
    modelo: number
    valorDiario: number
    estado: number
    fotografia: number
    tipoId: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    id?: true
    valorDiario?: true
    tipoId?: true
  }

  export type VehiculoSumAggregateInputType = {
    id?: true
    valorDiario?: true
    tipoId?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    patente?: true
    marca?: true
    modelo?: true
    valorDiario?: true
    estado?: true
    fotografia?: true
    tipoId?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    patente?: true
    marca?: true
    modelo?: true
    valorDiario?: true
    estado?: true
    fotografia?: true
    tipoId?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    patente?: true
    marca?: true
    modelo?: true
    valorDiario?: true
    estado?: true
    fotografia?: true
    tipoId?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipoId: number
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    valorDiario?: boolean
    estado?: boolean
    fotografia?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    arriendos?: boolean | Vehiculo$arriendosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>



  export type VehiculoSelectScalar = {
    id?: boolean
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    valorDiario?: boolean
    estado?: boolean
    fotografia?: boolean
    tipoId?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patente" | "marca" | "modelo" | "valorDiario" | "estado" | "fotografia" | "tipoId", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    arriendos?: boolean | Vehiculo$arriendosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      tipo: Prisma.$TipoPayload<ExtArgs>
      arriendos: Prisma.$ArriendoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patente: string
      marca: string
      modelo: string
      valorDiario: number
      estado: string
      fotografia: string
      tipoId: number
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arriendos<T extends Vehiculo$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'Int'>
    readonly patente: FieldRef<"Vehiculo", 'String'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly modelo: FieldRef<"Vehiculo", 'String'>
    readonly valorDiario: FieldRef<"Vehiculo", 'Int'>
    readonly estado: FieldRef<"Vehiculo", 'String'>
    readonly fotografia: FieldRef<"Vehiculo", 'String'>
    readonly tipoId: FieldRef<"Vehiculo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.arriendos
   */
  export type Vehiculo$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    cursor?: ArriendoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Arriendo
   */

  export type AggregateArriendo = {
    _count: ArriendoCountAggregateOutputType | null
    _avg: ArriendoAvgAggregateOutputType | null
    _sum: ArriendoSumAggregateOutputType | null
    _min: ArriendoMinAggregateOutputType | null
    _max: ArriendoMaxAggregateOutputType | null
  }

  export type ArriendoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    vehiculoId: number | null
  }

  export type ArriendoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    vehiculoId: number | null
  }

  export type ArriendoMinAggregateOutputType = {
    id: number | null
    rutCliente: string | null
    nombreCliente: string | null
    fechaInicio: Date | null
    fechaTermino: Date | null
    fechaHoraEntrega: Date | null
    fechaHoraRecepcion: Date | null
    fotoEntrega: string | null
    fotoRecepcion: string | null
    usuarioId: number | null
    vehiculoId: number | null
  }

  export type ArriendoMaxAggregateOutputType = {
    id: number | null
    rutCliente: string | null
    nombreCliente: string | null
    fechaInicio: Date | null
    fechaTermino: Date | null
    fechaHoraEntrega: Date | null
    fechaHoraRecepcion: Date | null
    fotoEntrega: string | null
    fotoRecepcion: string | null
    usuarioId: number | null
    vehiculoId: number | null
  }

  export type ArriendoCountAggregateOutputType = {
    id: number
    rutCliente: number
    nombreCliente: number
    fechaInicio: number
    fechaTermino: number
    fechaHoraEntrega: number
    fechaHoraRecepcion: number
    fotoEntrega: number
    fotoRecepcion: number
    usuarioId: number
    vehiculoId: number
    _all: number
  }


  export type ArriendoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    vehiculoId?: true
  }

  export type ArriendoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    vehiculoId?: true
  }

  export type ArriendoMinAggregateInputType = {
    id?: true
    rutCliente?: true
    nombreCliente?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaHoraEntrega?: true
    fechaHoraRecepcion?: true
    fotoEntrega?: true
    fotoRecepcion?: true
    usuarioId?: true
    vehiculoId?: true
  }

  export type ArriendoMaxAggregateInputType = {
    id?: true
    rutCliente?: true
    nombreCliente?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaHoraEntrega?: true
    fechaHoraRecepcion?: true
    fotoEntrega?: true
    fotoRecepcion?: true
    usuarioId?: true
    vehiculoId?: true
  }

  export type ArriendoCountAggregateInputType = {
    id?: true
    rutCliente?: true
    nombreCliente?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaHoraEntrega?: true
    fechaHoraRecepcion?: true
    fotoEntrega?: true
    fotoRecepcion?: true
    usuarioId?: true
    vehiculoId?: true
    _all?: true
  }

  export type ArriendoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arriendo to aggregate.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arriendos
    **/
    _count?: true | ArriendoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArriendoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArriendoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArriendoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArriendoMaxAggregateInputType
  }

  export type GetArriendoAggregateType<T extends ArriendoAggregateArgs> = {
        [P in keyof T & keyof AggregateArriendo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArriendo[P]>
      : GetScalarType<T[P], AggregateArriendo[P]>
  }




  export type ArriendoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithAggregationInput | ArriendoOrderByWithAggregationInput[]
    by: ArriendoScalarFieldEnum[] | ArriendoScalarFieldEnum
    having?: ArriendoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArriendoCountAggregateInputType | true
    _avg?: ArriendoAvgAggregateInputType
    _sum?: ArriendoSumAggregateInputType
    _min?: ArriendoMinAggregateInputType
    _max?: ArriendoMaxAggregateInputType
  }

  export type ArriendoGroupByOutputType = {
    id: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date
    fechaTermino: Date
    fechaHoraEntrega: Date | null
    fechaHoraRecepcion: Date | null
    fotoEntrega: string | null
    fotoRecepcion: string | null
    usuarioId: number
    vehiculoId: number
    _count: ArriendoCountAggregateOutputType | null
    _avg: ArriendoAvgAggregateOutputType | null
    _sum: ArriendoSumAggregateOutputType | null
    _min: ArriendoMinAggregateOutputType | null
    _max: ArriendoMaxAggregateOutputType | null
  }

  type GetArriendoGroupByPayload<T extends ArriendoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArriendoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArriendoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArriendoGroupByOutputType[P]>
            : GetScalarType<T[P], ArriendoGroupByOutputType[P]>
        }
      >
    >


  export type ArriendoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutCliente?: boolean
    nombreCliente?: boolean
    fechaInicio?: boolean
    fechaTermino?: boolean
    fechaHoraEntrega?: boolean
    fechaHoraRecepcion?: boolean
    fotoEntrega?: boolean
    fotoRecepcion?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arriendo"]>



  export type ArriendoSelectScalar = {
    id?: boolean
    rutCliente?: boolean
    nombreCliente?: boolean
    fechaInicio?: boolean
    fechaTermino?: boolean
    fechaHoraEntrega?: boolean
    fechaHoraRecepcion?: boolean
    fotoEntrega?: boolean
    fotoRecepcion?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
  }

  export type ArriendoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutCliente" | "nombreCliente" | "fechaInicio" | "fechaTermino" | "fechaHoraEntrega" | "fechaHoraRecepcion" | "fotoEntrega" | "fotoRecepcion" | "usuarioId" | "vehiculoId", ExtArgs["result"]["arriendo"]>
  export type ArriendoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $ArriendoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arriendo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutCliente: string
      nombreCliente: string
      fechaInicio: Date
      fechaTermino: Date
      fechaHoraEntrega: Date | null
      fechaHoraRecepcion: Date | null
      fotoEntrega: string | null
      fotoRecepcion: string | null
      usuarioId: number
      vehiculoId: number
    }, ExtArgs["result"]["arriendo"]>
    composites: {}
  }

  type ArriendoGetPayload<S extends boolean | null | undefined | ArriendoDefaultArgs> = $Result.GetResult<Prisma.$ArriendoPayload, S>

  type ArriendoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArriendoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArriendoCountAggregateInputType | true
    }

  export interface ArriendoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arriendo'], meta: { name: 'Arriendo' } }
    /**
     * Find zero or one Arriendo that matches the filter.
     * @param {ArriendoFindUniqueArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArriendoFindUniqueArgs>(args: SelectSubset<T, ArriendoFindUniqueArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arriendo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArriendoFindUniqueOrThrowArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArriendoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArriendoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindFirstArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArriendoFindFirstArgs>(args?: SelectSubset<T, ArriendoFindFirstArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindFirstOrThrowArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArriendoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArriendoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arriendos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arriendos
     * const arriendos = await prisma.arriendo.findMany()
     * 
     * // Get first 10 Arriendos
     * const arriendos = await prisma.arriendo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arriendoWithIdOnly = await prisma.arriendo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArriendoFindManyArgs>(args?: SelectSubset<T, ArriendoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arriendo.
     * @param {ArriendoCreateArgs} args - Arguments to create a Arriendo.
     * @example
     * // Create one Arriendo
     * const Arriendo = await prisma.arriendo.create({
     *   data: {
     *     // ... data to create a Arriendo
     *   }
     * })
     * 
     */
    create<T extends ArriendoCreateArgs>(args: SelectSubset<T, ArriendoCreateArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arriendos.
     * @param {ArriendoCreateManyArgs} args - Arguments to create many Arriendos.
     * @example
     * // Create many Arriendos
     * const arriendo = await prisma.arriendo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArriendoCreateManyArgs>(args?: SelectSubset<T, ArriendoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Arriendo.
     * @param {ArriendoDeleteArgs} args - Arguments to delete one Arriendo.
     * @example
     * // Delete one Arriendo
     * const Arriendo = await prisma.arriendo.delete({
     *   where: {
     *     // ... filter to delete one Arriendo
     *   }
     * })
     * 
     */
    delete<T extends ArriendoDeleteArgs>(args: SelectSubset<T, ArriendoDeleteArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arriendo.
     * @param {ArriendoUpdateArgs} args - Arguments to update one Arriendo.
     * @example
     * // Update one Arriendo
     * const arriendo = await prisma.arriendo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArriendoUpdateArgs>(args: SelectSubset<T, ArriendoUpdateArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arriendos.
     * @param {ArriendoDeleteManyArgs} args - Arguments to filter Arriendos to delete.
     * @example
     * // Delete a few Arriendos
     * const { count } = await prisma.arriendo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArriendoDeleteManyArgs>(args?: SelectSubset<T, ArriendoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arriendos
     * const arriendo = await prisma.arriendo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArriendoUpdateManyArgs>(args: SelectSubset<T, ArriendoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Arriendo.
     * @param {ArriendoUpsertArgs} args - Arguments to update or create a Arriendo.
     * @example
     * // Update or create a Arriendo
     * const arriendo = await prisma.arriendo.upsert({
     *   create: {
     *     // ... data to create a Arriendo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arriendo we want to update
     *   }
     * })
     */
    upsert<T extends ArriendoUpsertArgs>(args: SelectSubset<T, ArriendoUpsertArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoCountArgs} args - Arguments to filter Arriendos to count.
     * @example
     * // Count the number of Arriendos
     * const count = await prisma.arriendo.count({
     *   where: {
     *     // ... the filter for the Arriendos we want to count
     *   }
     * })
    **/
    count<T extends ArriendoCountArgs>(
      args?: Subset<T, ArriendoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArriendoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arriendo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArriendoAggregateArgs>(args: Subset<T, ArriendoAggregateArgs>): Prisma.PrismaPromise<GetArriendoAggregateType<T>>

    /**
     * Group by Arriendo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArriendoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArriendoGroupByArgs['orderBy'] }
        : { orderBy?: ArriendoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArriendoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArriendoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arriendo model
   */
  readonly fields: ArriendoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arriendo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArriendoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arriendo model
   */
  interface ArriendoFieldRefs {
    readonly id: FieldRef<"Arriendo", 'Int'>
    readonly rutCliente: FieldRef<"Arriendo", 'String'>
    readonly nombreCliente: FieldRef<"Arriendo", 'String'>
    readonly fechaInicio: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaTermino: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaHoraEntrega: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaHoraRecepcion: FieldRef<"Arriendo", 'DateTime'>
    readonly fotoEntrega: FieldRef<"Arriendo", 'String'>
    readonly fotoRecepcion: FieldRef<"Arriendo", 'String'>
    readonly usuarioId: FieldRef<"Arriendo", 'Int'>
    readonly vehiculoId: FieldRef<"Arriendo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Arriendo findUnique
   */
  export type ArriendoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo findUniqueOrThrow
   */
  export type ArriendoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo findFirst
   */
  export type ArriendoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo findFirstOrThrow
   */
  export type ArriendoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo findMany
   */
  export type ArriendoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendos to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo create
   */
  export type ArriendoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The data needed to create a Arriendo.
     */
    data: XOR<ArriendoCreateInput, ArriendoUncheckedCreateInput>
  }

  /**
   * Arriendo createMany
   */
  export type ArriendoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arriendos.
     */
    data: ArriendoCreateManyInput | ArriendoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arriendo update
   */
  export type ArriendoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The data needed to update a Arriendo.
     */
    data: XOR<ArriendoUpdateInput, ArriendoUncheckedUpdateInput>
    /**
     * Choose, which Arriendo to update.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo updateMany
   */
  export type ArriendoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arriendos.
     */
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyInput>
    /**
     * Filter which Arriendos to update
     */
    where?: ArriendoWhereInput
    /**
     * Limit how many Arriendos to update.
     */
    limit?: number
  }

  /**
   * Arriendo upsert
   */
  export type ArriendoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The filter to search for the Arriendo to update in case it exists.
     */
    where: ArriendoWhereUniqueInput
    /**
     * In case the Arriendo found by the `where` argument doesn't exist, create a new Arriendo with this data.
     */
    create: XOR<ArriendoCreateInput, ArriendoUncheckedCreateInput>
    /**
     * In case the Arriendo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArriendoUpdateInput, ArriendoUncheckedUpdateInput>
  }

  /**
   * Arriendo delete
   */
  export type ArriendoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter which Arriendo to delete.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo deleteMany
   */
  export type ArriendoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arriendos to delete
     */
    where?: ArriendoWhereInput
    /**
     * Limit how many Arriendos to delete.
     */
    limit?: number
  }

  /**
   * Arriendo without action
   */
  export type ArriendoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    rut: string | null
    nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    rut: string | null
    nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    rut: number
    nombre: number
    telefono: number
    email: number
    direccion: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    rut?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    rut?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    rut?: true
    nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    rut: string
    nombre: string
    telefono: string | null
    email: string | null
    direccion: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rut?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    rut?: boolean
    nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rut" | "nombre" | "telefono" | "email" | "direccion", ExtArgs["result"]["cliente"]>

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rut: string
      nombre: string
      telefono: string | null
      email: string | null
      direccion: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly rut: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    identificador: 'identificador',
    nombre: 'nombre',
    password: 'password',
    perfilId: 'perfilId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TipoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoScalarFieldEnum = (typeof TipoScalarFieldEnum)[keyof typeof TipoScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    valorDiario: 'valorDiario',
    estado: 'estado',
    fotografia: 'fotografia',
    tipoId: 'tipoId'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const ArriendoScalarFieldEnum: {
    id: 'id',
    rutCliente: 'rutCliente',
    nombreCliente: 'nombreCliente',
    fechaInicio: 'fechaInicio',
    fechaTermino: 'fechaTermino',
    fechaHoraEntrega: 'fechaHoraEntrega',
    fechaHoraRecepcion: 'fechaHoraRecepcion',
    fotoEntrega: 'fotoEntrega',
    fotoRecepcion: 'fotoRecepcion',
    usuarioId: 'usuarioId',
    vehiculoId: 'vehiculoId'
  };

  export type ArriendoScalarFieldEnum = (typeof ArriendoScalarFieldEnum)[keyof typeof ArriendoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    rut: 'rut',
    nombre: 'nombre',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PerfilOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type PerfilOrderByRelevanceFieldEnum = (typeof PerfilOrderByRelevanceFieldEnum)[keyof typeof PerfilOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    identificador: 'identificador',
    nombre: 'nombre',
    password: 'password'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TipoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoOrderByRelevanceFieldEnum = (typeof TipoOrderByRelevanceFieldEnum)[keyof typeof TipoOrderByRelevanceFieldEnum]


  export const VehiculoOrderByRelevanceFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    estado: 'estado',
    fotografia: 'fotografia'
  };

  export type VehiculoOrderByRelevanceFieldEnum = (typeof VehiculoOrderByRelevanceFieldEnum)[keyof typeof VehiculoOrderByRelevanceFieldEnum]


  export const ArriendoOrderByRelevanceFieldEnum: {
    rutCliente: 'rutCliente',
    nombreCliente: 'nombreCliente',
    fotoEntrega: 'fotoEntrega',
    fotoRecepcion: 'fotoRecepcion'
  };

  export type ArriendoOrderByRelevanceFieldEnum = (typeof ArriendoOrderByRelevanceFieldEnum)[keyof typeof ArriendoOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    rut: 'rut',
    nombre: 'nombre',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: IntFilter<"Perfil"> | number
    nombre?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: PerfilOrderByRelevanceInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    nombre?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perfil"> | number
    nombre?: StringWithAggregatesFilter<"Perfil"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    identificador?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
    perfil?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    arriendos?: ArriendoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    identificador?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
    arriendos?: ArriendoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identificador?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
    perfil?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    arriendos?: ArriendoListRelationFilter
  }, "id" | "identificador">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    identificador?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    identificador?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    perfilId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type TipoWhereInput = {
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    id?: IntFilter<"Tipo"> | number
    nombre?: StringFilter<"Tipo"> | string
    descripcion?: StringNullableFilter<"Tipo"> | string | null
    vehiculos?: VehiculoListRelationFilter
  }

  export type TipoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    vehiculos?: VehiculoOrderByRelationAggregateInput
    _relevance?: TipoOrderByRelevanceInput
  }

  export type TipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    nombre?: StringFilter<"Tipo"> | string
    descripcion?: StringNullableFilter<"Tipo"> | string | null
    vehiculos?: VehiculoListRelationFilter
  }, "id">

  export type TipoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: TipoCountOrderByAggregateInput
    _avg?: TipoAvgOrderByAggregateInput
    _max?: TipoMaxOrderByAggregateInput
    _min?: TipoMinOrderByAggregateInput
    _sum?: TipoSumOrderByAggregateInput
  }

  export type TipoScalarWhereWithAggregatesInput = {
    AND?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    OR?: TipoScalarWhereWithAggregatesInput[]
    NOT?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tipo"> | number
    nombre?: StringWithAggregatesFilter<"Tipo"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Tipo"> | string | null
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    patente?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    valorDiario?: IntFilter<"Vehiculo"> | number
    estado?: StringFilter<"Vehiculo"> | string
    fotografia?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    arriendos?: ArriendoListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    valorDiario?: SortOrder
    estado?: SortOrder
    fotografia?: SortOrder
    tipoId?: SortOrder
    tipo?: TipoOrderByWithRelationInput
    arriendos?: ArriendoOrderByRelationAggregateInput
    _relevance?: VehiculoOrderByRelevanceInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patente?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    valorDiario?: IntFilter<"Vehiculo"> | number
    estado?: StringFilter<"Vehiculo"> | string
    fotografia?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    arriendos?: ArriendoListRelationFilter
  }, "id" | "patente">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    valorDiario?: SortOrder
    estado?: SortOrder
    fotografia?: SortOrder
    tipoId?: SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehiculo"> | number
    patente?: StringWithAggregatesFilter<"Vehiculo"> | string
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    modelo?: StringWithAggregatesFilter<"Vehiculo"> | string
    valorDiario?: IntWithAggregatesFilter<"Vehiculo"> | number
    estado?: StringWithAggregatesFilter<"Vehiculo"> | string
    fotografia?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipoId?: IntWithAggregatesFilter<"Vehiculo"> | number
  }

  export type ArriendoWhereInput = {
    AND?: ArriendoWhereInput | ArriendoWhereInput[]
    OR?: ArriendoWhereInput[]
    NOT?: ArriendoWhereInput | ArriendoWhereInput[]
    id?: IntFilter<"Arriendo"> | number
    rutCliente?: StringFilter<"Arriendo"> | string
    nombreCliente?: StringFilter<"Arriendo"> | string
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaHoraEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaHoraRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotoEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotoRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    usuarioId?: IntFilter<"Arriendo"> | number
    vehiculoId?: IntFilter<"Arriendo"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type ArriendoOrderByWithRelationInput = {
    id?: SortOrder
    rutCliente?: SortOrder
    nombreCliente?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaHoraEntrega?: SortOrderInput | SortOrder
    fechaHoraRecepcion?: SortOrderInput | SortOrder
    fotoEntrega?: SortOrderInput | SortOrder
    fotoRecepcion?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: ArriendoOrderByRelevanceInput
  }

  export type ArriendoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArriendoWhereInput | ArriendoWhereInput[]
    OR?: ArriendoWhereInput[]
    NOT?: ArriendoWhereInput | ArriendoWhereInput[]
    rutCliente?: StringFilter<"Arriendo"> | string
    nombreCliente?: StringFilter<"Arriendo"> | string
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaHoraEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaHoraRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotoEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotoRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    usuarioId?: IntFilter<"Arriendo"> | number
    vehiculoId?: IntFilter<"Arriendo"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "id">

  export type ArriendoOrderByWithAggregationInput = {
    id?: SortOrder
    rutCliente?: SortOrder
    nombreCliente?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaHoraEntrega?: SortOrderInput | SortOrder
    fechaHoraRecepcion?: SortOrderInput | SortOrder
    fotoEntrega?: SortOrderInput | SortOrder
    fotoRecepcion?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    _count?: ArriendoCountOrderByAggregateInput
    _avg?: ArriendoAvgOrderByAggregateInput
    _max?: ArriendoMaxOrderByAggregateInput
    _min?: ArriendoMinOrderByAggregateInput
    _sum?: ArriendoSumOrderByAggregateInput
  }

  export type ArriendoScalarWhereWithAggregatesInput = {
    AND?: ArriendoScalarWhereWithAggregatesInput | ArriendoScalarWhereWithAggregatesInput[]
    OR?: ArriendoScalarWhereWithAggregatesInput[]
    NOT?: ArriendoScalarWhereWithAggregatesInput | ArriendoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Arriendo"> | number
    rutCliente?: StringWithAggregatesFilter<"Arriendo"> | string
    nombreCliente?: StringWithAggregatesFilter<"Arriendo"> | string
    fechaInicio?: DateTimeWithAggregatesFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeWithAggregatesFilter<"Arriendo"> | Date | string
    fechaHoraEntrega?: DateTimeNullableWithAggregatesFilter<"Arriendo"> | Date | string | null
    fechaHoraRecepcion?: DateTimeNullableWithAggregatesFilter<"Arriendo"> | Date | string | null
    fotoEntrega?: StringNullableWithAggregatesFilter<"Arriendo"> | string | null
    fotoRecepcion?: StringNullableWithAggregatesFilter<"Arriendo"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Arriendo"> | number
    vehiculoId?: IntWithAggregatesFilter<"Arriendo"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    rut?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringNullableFilter<"Cliente"> | string | null
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rut?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringNullableFilter<"Cliente"> | string | null
  }, "id" | "rut">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    rut?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
  }

  export type PerfilCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PerfilUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    identificador: string
    nombre: string
    password: string
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
    arriendos?: ArriendoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    identificador: string
    nombre: string
    password: string
    perfilId: number
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
    arriendos?: ArriendoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
    arriendos?: ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    identificador: string
    nombre: string
    password: string
    perfilId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoCreateInput = {
    nombre: string
    descripcion?: string | null
    vehiculos?: VehiculoCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculos?: VehiculoUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculos?: VehiculoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoCreateInput = {
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipo: TipoCreateNestedOneWithoutVehiculosInput
    arriendos?: ArriendoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipoId: number
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutVehiculosNestedInput
    arriendos?: ArriendoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    arriendos?: ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipoId: number
  }

  export type VehiculoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoCreateInput = {
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuario: UsuarioCreateNestedOneWithoutArriendosInput
    vehiculo: VehiculoCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuarioId: number
    vehiculoId: number
  }

  export type ArriendoUpdateInput = {
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutArriendosNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoCreateManyInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuarioId: number
    vehiculoId: number
  }

  export type ArriendoUpdateManyMutationInput = {
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArriendoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    rut: string
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    rut: string
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
  }

  export type ClienteUpdateInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteCreateManyInput = {
    id?: number
    rut: string
    nombre: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
  }

  export type ClienteUpdateManyMutationInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerfilOrderByRelevanceInput = {
    fields: PerfilOrderByRelevanceFieldEnum | PerfilOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PerfilScalarRelationFilter = {
    is?: PerfilWhereInput
    isNot?: PerfilWhereInput
  }

  export type ArriendoListRelationFilter = {
    every?: ArriendoWhereInput
    some?: ArriendoWhereInput
    none?: ArriendoWhereInput
  }

  export type ArriendoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    identificador?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    identificador?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    identificador?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VehiculoListRelationFilter = {
    every?: VehiculoWhereInput
    some?: VehiculoWhereInput
    none?: VehiculoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoOrderByRelevanceInput = {
    fields: TipoOrderByRelevanceFieldEnum | TipoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TipoScalarRelationFilter = {
    is?: TipoWhereInput
    isNot?: TipoWhereInput
  }

  export type VehiculoOrderByRelevanceInput = {
    fields: VehiculoOrderByRelevanceFieldEnum | VehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    valorDiario?: SortOrder
    estado?: SortOrder
    fotografia?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorDiario?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    valorDiario?: SortOrder
    estado?: SortOrder
    fotografia?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    valorDiario?: SortOrder
    estado?: SortOrder
    fotografia?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    valorDiario?: SortOrder
    tipoId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type ArriendoOrderByRelevanceInput = {
    fields: ArriendoOrderByRelevanceFieldEnum | ArriendoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArriendoCountOrderByAggregateInput = {
    id?: SortOrder
    rutCliente?: SortOrder
    nombreCliente?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaHoraEntrega?: SortOrder
    fechaHoraRecepcion?: SortOrder
    fotoEntrega?: SortOrder
    fotoRecepcion?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type ArriendoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type ArriendoMaxOrderByAggregateInput = {
    id?: SortOrder
    rutCliente?: SortOrder
    nombreCliente?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaHoraEntrega?: SortOrder
    fechaHoraRecepcion?: SortOrder
    fotoEntrega?: SortOrder
    fotoRecepcion?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type ArriendoMinOrderByAggregateInput = {
    id?: SortOrder
    rutCliente?: SortOrder
    nombreCliente?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaHoraEntrega?: SortOrder
    fechaHoraRecepcion?: SortOrder
    fotoEntrega?: SortOrder
    fotoRecepcion?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type ArriendoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
  }

  export type ArriendoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type ArriendoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type PerfilUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    upsert?: PerfilUpsertWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuariosInput, PerfilUpdateWithoutUsuariosInput>, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type ArriendoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutUsuarioInput | ArriendoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutUsuarioInput | ArriendoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutUsuarioInput | ArriendoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutUsuarioInput | ArriendoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutUsuarioInput | ArriendoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutUsuarioInput | ArriendoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type VehiculoCreateNestedManyWithoutTipoInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VehiculoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTipoInput | VehiculoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTipoInput | VehiculoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTipoInput | VehiculoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTipoInput | VehiculoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTipoInput | VehiculoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTipoInput | VehiculoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type TipoCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<TipoCreateWithoutVehiculosInput, TipoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutVehiculosInput
    connect?: TipoWhereUniqueInput
  }

  export type ArriendoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type ArriendoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type TipoUpdateOneRequiredWithoutVehiculosNestedInput = {
    create?: XOR<TipoCreateWithoutVehiculosInput, TipoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutVehiculosInput
    upsert?: TipoUpsertWithoutVehiculosInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutVehiculosInput, TipoUpdateWithoutVehiculosInput>, TipoUncheckedUpdateWithoutVehiculosInput>
  }

  export type ArriendoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutVehiculoInput | ArriendoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutVehiculoInput | ArriendoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutVehiculoInput | ArriendoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutVehiculoInput | ArriendoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutVehiculoInput | ArriendoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutVehiculoInput | ArriendoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutArriendosInput = {
    create?: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArriendosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutArriendosInput = {
    create?: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutArriendosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArriendosInput
    upsert?: UsuarioUpsertWithoutArriendosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutArriendosInput, UsuarioUpdateWithoutArriendosInput>, UsuarioUncheckedUpdateWithoutArriendosInput>
  }

  export type VehiculoUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutArriendosInput
    upsert?: VehiculoUpsertWithoutArriendosInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutArriendosInput, VehiculoUpdateWithoutArriendosInput>, VehiculoUncheckedUpdateWithoutArriendosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutPerfilInput = {
    identificador: string
    nombre: string
    password: string
    arriendos?: ArriendoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPerfilInput = {
    id?: number
    identificador: string
    nombre: string
    password: string
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioCreateManyPerfilInputEnvelope = {
    data: UsuarioCreateManyPerfilInput | UsuarioCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPerfilInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPerfilInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    identificador?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
  }

  export type PerfilCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type PerfilUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
  }

  export type PerfilCreateOrConnectWithoutUsuariosInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
  }

  export type ArriendoCreateWithoutUsuarioInput = {
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    vehiculo: VehiculoCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    vehiculoId: number
  }

  export type ArriendoCreateOrConnectWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    create: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput>
  }

  export type ArriendoCreateManyUsuarioInputEnvelope = {
    data: ArriendoCreateManyUsuarioInput | ArriendoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithoutUsuariosInput = {
    update: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type PerfilUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    update: XOR<ArriendoUpdateWithoutUsuarioInput, ArriendoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput>
  }

  export type ArriendoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    data: XOR<ArriendoUpdateWithoutUsuarioInput, ArriendoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ArriendoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ArriendoScalarWhereInput
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ArriendoScalarWhereInput = {
    AND?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
    OR?: ArriendoScalarWhereInput[]
    NOT?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
    id?: IntFilter<"Arriendo"> | number
    rutCliente?: StringFilter<"Arriendo"> | string
    nombreCliente?: StringFilter<"Arriendo"> | string
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaHoraEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaHoraRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotoEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotoRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    usuarioId?: IntFilter<"Arriendo"> | number
    vehiculoId?: IntFilter<"Arriendo"> | number
  }

  export type VehiculoCreateWithoutTipoInput = {
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    arriendos?: ArriendoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutTipoInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput>
  }

  export type VehiculoCreateManyTipoInputEnvelope = {
    data: VehiculoCreateManyTipoInput | VehiculoCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithWhereUniqueWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    update: XOR<VehiculoUpdateWithoutTipoInput, VehiculoUncheckedUpdateWithoutTipoInput>
    create: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput>
  }

  export type VehiculoUpdateWithWhereUniqueWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    data: XOR<VehiculoUpdateWithoutTipoInput, VehiculoUncheckedUpdateWithoutTipoInput>
  }

  export type VehiculoUpdateManyWithWhereWithoutTipoInput = {
    where: VehiculoScalarWhereInput
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyWithoutTipoInput>
  }

  export type VehiculoScalarWhereInput = {
    AND?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    OR?: VehiculoScalarWhereInput[]
    NOT?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    patente?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    valorDiario?: IntFilter<"Vehiculo"> | number
    estado?: StringFilter<"Vehiculo"> | string
    fotografia?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
  }

  export type TipoCreateWithoutVehiculosInput = {
    nombre: string
    descripcion?: string | null
  }

  export type TipoUncheckedCreateWithoutVehiculosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoCreateOrConnectWithoutVehiculosInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutVehiculosInput, TipoUncheckedCreateWithoutVehiculosInput>
  }

  export type ArriendoCreateWithoutVehiculoInput = {
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuario: UsuarioCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateWithoutVehiculoInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuarioId: number
  }

  export type ArriendoCreateOrConnectWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    create: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput>
  }

  export type ArriendoCreateManyVehiculoInputEnvelope = {
    data: ArriendoCreateManyVehiculoInput | ArriendoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type TipoUpsertWithoutVehiculosInput = {
    update: XOR<TipoUpdateWithoutVehiculosInput, TipoUncheckedUpdateWithoutVehiculosInput>
    create: XOR<TipoCreateWithoutVehiculosInput, TipoUncheckedCreateWithoutVehiculosInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutVehiculosInput, TipoUncheckedUpdateWithoutVehiculosInput>
  }

  export type TipoUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoUncheckedUpdateWithoutVehiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArriendoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    update: XOR<ArriendoUpdateWithoutVehiculoInput, ArriendoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput>
  }

  export type ArriendoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    data: XOR<ArriendoUpdateWithoutVehiculoInput, ArriendoUncheckedUpdateWithoutVehiculoInput>
  }

  export type ArriendoUpdateManyWithWhereWithoutVehiculoInput = {
    where: ArriendoScalarWhereInput
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type UsuarioCreateWithoutArriendosInput = {
    identificador: string
    nombre: string
    password: string
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutArriendosInput = {
    id?: number
    identificador: string
    nombre: string
    password: string
    perfilId: number
  }

  export type UsuarioCreateOrConnectWithoutArriendosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
  }

  export type VehiculoCreateWithoutArriendosInput = {
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipo: TipoCreateNestedOneWithoutVehiculosInput
  }

  export type VehiculoUncheckedCreateWithoutArriendosInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
    tipoId: number
  }

  export type VehiculoCreateOrConnectWithoutArriendosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
  }

  export type UsuarioUpsertWithoutArriendosInput = {
    update: XOR<UsuarioUpdateWithoutArriendosInput, UsuarioUncheckedUpdateWithoutArriendosInput>
    create: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutArriendosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutArriendosInput, UsuarioUncheckedUpdateWithoutArriendosInput>
  }

  export type UsuarioUpdateWithoutArriendosInput = {
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculoUpsertWithoutArriendosInput = {
    update: XOR<VehiculoUpdateWithoutArriendosInput, VehiculoUncheckedUpdateWithoutArriendosInput>
    create: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutArriendosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutArriendosInput, VehiculoUncheckedUpdateWithoutArriendosInput>
  }

  export type VehiculoUpdateWithoutArriendosInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutVehiculosNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyPerfilInput = {
    id?: number
    identificador: string
    nombre: string
    password: string
  }

  export type UsuarioUpdateWithoutPerfilInput = {
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificador?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoCreateManyUsuarioInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    vehiculoId: number
  }

  export type ArriendoUpdateWithoutUsuarioInput = {
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo?: VehiculoUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculoCreateManyTipoInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    estado: string
    fotografia: string
  }

  export type VehiculoUpdateWithoutTipoInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fotografia?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoCreateManyVehiculoInput = {
    id?: number
    rutCliente: string
    nombreCliente: string
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaHoraEntrega?: Date | string | null
    fechaHoraRecepcion?: Date | string | null
    fotoEntrega?: string | null
    fotoRecepcion?: string | null
    usuarioId: number
  }

  export type ArriendoUpdateWithoutVehiculoInput = {
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutCliente?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaHoraEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaHoraRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotoEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotoRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}