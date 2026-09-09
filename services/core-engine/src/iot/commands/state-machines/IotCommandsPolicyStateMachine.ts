export type IotCommandsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsPolicyStateMachine {
  private allowedTransitions: Record<IotCommandsPolicyState, IotCommandsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsPolicyState, to: IotCommandsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsPolicyState, to: IotCommandsPolicyState): IotCommandsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
