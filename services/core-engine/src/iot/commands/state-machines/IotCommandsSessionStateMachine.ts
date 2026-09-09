export type IotCommandsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsSessionStateMachine {
  private allowedTransitions: Record<IotCommandsSessionState, IotCommandsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsSessionState, to: IotCommandsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsSessionState, to: IotCommandsSessionState): IotCommandsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsSession: " + from + " -> " + to);
    }
    return to;
  }
}
