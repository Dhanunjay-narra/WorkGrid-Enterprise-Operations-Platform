export type IotThresholdsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsMappingStateMachine {
  private allowedTransitions: Record<IotThresholdsMappingState, IotThresholdsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsMappingState, to: IotThresholdsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsMappingState, to: IotThresholdsMappingState): IotThresholdsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
