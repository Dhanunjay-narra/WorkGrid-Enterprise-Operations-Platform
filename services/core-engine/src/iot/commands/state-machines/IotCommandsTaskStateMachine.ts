export type IotCommandsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsTaskStateMachine {
  private allowedTransitions: Record<IotCommandsTaskState, IotCommandsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsTaskState, to: IotCommandsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsTaskState, to: IotCommandsTaskState): IotCommandsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsTask: " + from + " -> " + to);
    }
    return to;
  }
}
