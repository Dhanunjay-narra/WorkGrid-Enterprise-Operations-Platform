export type IotCommandsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsStateStateMachine {
  private allowedTransitions: Record<IotCommandsStateState, IotCommandsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsStateState, to: IotCommandsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsStateState, to: IotCommandsStateState): IotCommandsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsState: " + from + " -> " + to);
    }
    return to;
  }
}
