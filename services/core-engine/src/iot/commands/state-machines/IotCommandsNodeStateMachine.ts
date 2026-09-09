export type IotCommandsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsNodeStateMachine {
  private allowedTransitions: Record<IotCommandsNodeState, IotCommandsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsNodeState, to: IotCommandsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsNodeState, to: IotCommandsNodeState): IotCommandsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsNode: " + from + " -> " + to);
    }
    return to;
  }
}
