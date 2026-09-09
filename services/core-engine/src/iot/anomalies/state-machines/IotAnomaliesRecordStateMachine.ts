export type IotAnomaliesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesRecordStateMachine {
  private allowedTransitions: Record<IotAnomaliesRecordState, IotAnomaliesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesRecordState, to: IotAnomaliesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesRecordState, to: IotAnomaliesRecordState): IotAnomaliesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
