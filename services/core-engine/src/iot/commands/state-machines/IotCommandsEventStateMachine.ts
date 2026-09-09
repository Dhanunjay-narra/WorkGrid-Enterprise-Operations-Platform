export type IotCommandsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsEventStateMachine {
  private allowedTransitions: Record<IotCommandsEventState, IotCommandsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsEventState, to: IotCommandsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsEventState, to: IotCommandsEventState): IotCommandsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
