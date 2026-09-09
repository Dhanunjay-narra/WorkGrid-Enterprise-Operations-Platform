export type IotLocationsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsRecordStateMachine {
  private allowedTransitions: Record<IotLocationsRecordState, IotLocationsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsRecordState, to: IotLocationsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsRecordState, to: IotLocationsRecordState): IotLocationsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
