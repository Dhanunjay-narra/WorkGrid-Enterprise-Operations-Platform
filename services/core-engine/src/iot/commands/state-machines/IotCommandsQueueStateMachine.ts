export type IotCommandsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsQueueStateMachine {
  private allowedTransitions: Record<IotCommandsQueueState, IotCommandsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsQueueState, to: IotCommandsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsQueueState, to: IotCommandsQueueState): IotCommandsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
