export type IotCommandsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsThresholdStateMachine {
  private allowedTransitions: Record<IotCommandsThresholdState, IotCommandsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsThresholdState, to: IotCommandsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsThresholdState, to: IotCommandsThresholdState): IotCommandsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
