declare module "game/prototypes" {
  import { FindPathOpts, PathStep } from "game/path-finder";
  export interface RoomObjectJSON {
    id: number;
    x: number;
    y: number;
  }
  export interface RoomObject extends RoomPosition {
    /**
     * A unique object identificator.
     * You can use {@link getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;

    // constructor(id: any);
    /**
     * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
     */
    exists: boolean;

    /**
     * Returns the path from this object to another position. pos can be any object containing x and y properties. See /game/utils::findPath for details.
     * @param pos
     * @param opts
     */
    findPathTo(pos: RoomPosition, opts: FindPathOpts): PathStep[];

    /**
     * Find all positions from the given positions array within the specified linear range.
     * @param fromPos
     * @param positions
     * @param range
     */
    findInRange(fromPos: RoomPosition, positions: RoomPosition[], range: number): RoomPosition[];

    /**
     * Find a position with the shortest linear distance from the given position, or null otherwise.
     * @param fromPos
     * @param positions
     */
    findClosestByRange(fromPos: RoomPosition, positions: RoomPosition[]): RoomPosition;

    /**
     * Find a position with the shortest path from the given position, or null otherwise.
     * @param fromPos
     * @param positions
     * @param opts object containing additional options:
     * ignore: array (objects which should be treated as obstacles during the search)
     * Any options supported by searchPath method
     */
    findClosestByPath(fromPos: RoomPosition, positions: RoomPosition[], opts?: FindPathOpts): RoomPosition;

    toJSON(): RoomObjectJSON;
  }
}
