export type IotLocationsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsMappingStateMachine {
  private allowedTransitions: Record<IotLocationsMappingState, IotLocationsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsMappingState, to: IotLocationsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsMappingState, to: IotLocationsMappingState): IotLocationsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
