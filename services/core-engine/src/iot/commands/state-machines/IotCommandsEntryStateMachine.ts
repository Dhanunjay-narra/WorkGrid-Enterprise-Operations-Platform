export type IotCommandsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsEntryStateMachine {
  private allowedTransitions: Record<IotCommandsEntryState, IotCommandsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsEntryState, to: IotCommandsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsEntryState, to: IotCommandsEntryState): IotCommandsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
