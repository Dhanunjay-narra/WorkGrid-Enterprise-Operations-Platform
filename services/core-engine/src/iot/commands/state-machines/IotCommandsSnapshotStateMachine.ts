export type IotCommandsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsSnapshotStateMachine {
  private allowedTransitions: Record<IotCommandsSnapshotState, IotCommandsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsSnapshotState, to: IotCommandsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsSnapshotState, to: IotCommandsSnapshotState): IotCommandsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
