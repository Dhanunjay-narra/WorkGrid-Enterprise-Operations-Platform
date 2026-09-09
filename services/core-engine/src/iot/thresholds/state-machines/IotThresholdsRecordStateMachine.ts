export type IotThresholdsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsRecordStateMachine {
  private allowedTransitions: Record<IotThresholdsRecordState, IotThresholdsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsRecordState, to: IotThresholdsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsRecordState, to: IotThresholdsRecordState): IotThresholdsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
