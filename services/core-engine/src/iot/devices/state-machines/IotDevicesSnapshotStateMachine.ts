export type IotDevicesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesSnapshotStateMachine {
  private allowedTransitions: Record<IotDevicesSnapshotState, IotDevicesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesSnapshotState, to: IotDevicesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesSnapshotState, to: IotDevicesSnapshotState): IotDevicesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
