export type IotCommandsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsConfigStateMachine {
  private allowedTransitions: Record<IotCommandsConfigState, IotCommandsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsConfigState, to: IotCommandsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsConfigState, to: IotCommandsConfigState): IotCommandsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
