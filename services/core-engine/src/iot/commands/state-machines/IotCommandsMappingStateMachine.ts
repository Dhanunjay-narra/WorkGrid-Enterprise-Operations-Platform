export type IotCommandsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsMappingStateMachine {
  private allowedTransitions: Record<IotCommandsMappingState, IotCommandsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsMappingState, to: IotCommandsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsMappingState, to: IotCommandsMappingState): IotCommandsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
