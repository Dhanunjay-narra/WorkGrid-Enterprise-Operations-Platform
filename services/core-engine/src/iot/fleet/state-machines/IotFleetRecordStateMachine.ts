export type IotFleetRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetRecordStateMachine {
  private allowedTransitions: Record<IotFleetRecordState, IotFleetRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetRecordState, to: IotFleetRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetRecordState, to: IotFleetRecordState): IotFleetRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetRecord: " + from + " -> " + to);
    }
    return to;
  }
}
