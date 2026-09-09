export type IotFleetMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetMappingStateMachine {
  private allowedTransitions: Record<IotFleetMappingState, IotFleetMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetMappingState, to: IotFleetMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetMappingState, to: IotFleetMappingState): IotFleetMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetMapping: " + from + " -> " + to);
    }
    return to;
  }
}
