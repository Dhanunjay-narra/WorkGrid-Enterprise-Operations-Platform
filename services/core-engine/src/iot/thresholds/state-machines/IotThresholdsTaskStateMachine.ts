export type IotThresholdsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsTaskStateMachine {
  private allowedTransitions: Record<IotThresholdsTaskState, IotThresholdsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsTaskState, to: IotThresholdsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsTaskState, to: IotThresholdsTaskState): IotThresholdsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsTask: " + from + " -> " + to);
    }
    return to;
  }
}
