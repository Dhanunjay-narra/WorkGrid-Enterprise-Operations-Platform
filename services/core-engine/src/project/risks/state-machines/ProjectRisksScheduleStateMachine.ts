export type ProjectRisksScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksScheduleStateMachine {
  private allowedTransitions: Record<ProjectRisksScheduleState, ProjectRisksScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksScheduleState, to: ProjectRisksScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksScheduleState, to: ProjectRisksScheduleState): ProjectRisksScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
